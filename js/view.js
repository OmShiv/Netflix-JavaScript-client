'use strict';

var Netflix = Netflix || {};

// Module Pattern

Netflix.view = (function () {
    function destroyView() {
        while (Netflix.dom.body.lastChild) {
            Netflix.dom.body.removeChild(Netflix.dom.body.lastChild);
        };
        // lastChild -> faster than firstChild -> faster than .innerHTML = ''
        // http://jsperf.com/innerhtml-vs-removechild
        // http://jsperf.com/innerhtml-vs-removechild/15 -- fastChild fastest
    }

    function refresView () {
        destroyView();
        Netflix.init();
    }

    return {
        destroy: destroyView,
        refresh: refresView,
        /*
         * @param: {boolean} detail
         */
        detailToggle: function (detail) {
            var mthd = detail ? 'add' : 'remove';
            [Netflix.dom.head, Netflix.dom.body].forEach(function (el) {
                el.classList[mthd]('detail-view');
            });
            this.detailView = detail;
        }
    };
}());


// Constructor Pattern

Netflix.listView = function (list) {
    var groupEl = document.createElement('div'),
        headerEl = document.createElement('h3'),
        listEl = document.createElement('ul');

    var innerFragment = document.createDocumentFragment();

    groupEl.className = 'group';
    listEl.className = 'movie-list';

    headerEl.innerHTML = list.summary.displayName;

    [headerEl, listEl].forEach(function (el) {
        innerFragment.appendChild(el);
    });
    groupEl.appendChild(innerFragment);

    this.dom = groupEl;
    this.movieListEl = listEl;
    this.movies = list.movies;
}

Netflix.listView.prototype.renderTo = function (el) {
    el.appendChild(this.dom);
    return this;
}

Netflix.listView.prototype.renderMovieList = function () {
    var movieModel = Netflix.DBModel.getModel(),
        moviesFragment = document.createDocumentFragment();
    for (var movie in this.movies) {
        var movieThumb = document.createElement('li'),
            movieData = movieModel.fetchMovie(this.movies[movie]);
        movieThumb.innerHTML = '<img src="' + movieData.box_art['150x214'] +
            '" class="movie-image" data-id="'+ this.movies[movie] +'"/>';
        moviesFragment.appendChild(movieThumb);
    }
    this.movieListEl.appendChild(moviesFragment);
    return this;
}

Netflix.listView.prototype.destroy = function () {
    this.dom &&
        this.dom.parentNode &&
            this.dom.parentNode.removeChild(this.dom);
}


/*
 * Singleton pattern
 * Since we need only one view to be displayed at a time
 * Hence there must be a single view which just re-renders itself with new data.
 * not that efficient, just trying something.
 */

Netflix.movieView = (function () {
    var viewInstance = null;

    function getDom (data) {
        var movieDom = document.createElement('div');
        movieDom.className = 'movie-detail';
        movieDom.innerHTML = ''+
        '<div class="movie-thumb">'+
          '<img src="'+ data.thumbNail +'" alt="Netflix movie">'+
          '<div class="play-overlay"></div>'+
        '</div>'+
        '<div class="movie-desc">'+
          '<div class="head">'+ data.shortTitle +'</div>'+
          '<div>'+ data.playTitle +'</div>'+
        '</div>';

        return movieDom;
    }

    function createView () {
        return {
            renderMovie: function (movie) {
                var data = {
                    thumbNail: movie.box_art['150x214'] || '',
                    shortTitle: movie.title.title_short || '',
                    playTitle: movie.title.playback_title || ''
                }
                this.dom = getDom(data);

                // Reusing the same method from listView using fn.call
                Netflix.listView.prototype.renderTo.call(this, Netflix.dom.body);
                Netflix.view.detailToggle(true);
            },
            closeView: function () {
                Netflix.listView.prototype.destroy.call(this);
            }
        }
    }

    return {
        getView: function () {
            if (!viewInstance) {
                viewInstance = createView();
            }
            return viewInstance;
        }
    };
}());
