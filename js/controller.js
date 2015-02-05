'use strict';

var Netflix = Netflix || {};

Netflix.dom = (function () {
    var baseDom = document.querySelector('#main-view'),
        header = document.querySelector('#header'),
        actionBtn = document.querySelector('#action');

    return {
        body: baseDom,
        head: header,
        action: actionBtn
    }
}());

Netflix.init = (function () {

    // private
    var MovieModel = Netflix.DBModel.getModel(),
        movieList = MovieModel.fetchMovieList();

    Netflix.dom.body.addEventListener('click', function(evt) {
        var movieElem = evt.target || evt.srcElement,
            movieId = movieElem.getAttribute('data-id');

        if (!movieId) {
            return false;
        };

        var movie = MovieModel.fetchMovie(movieId),
            movieView = Netflix.movieView.getView();

        Netflix.view.destroy();
        movieView.renderMovie(movie);
    }, false);

    Netflix.dom.action.addEventListener('click', function(evt) {
        if (Netflix.view.detailView) {
            Netflix.view.refresh();
        }
    }, false);

    Netflix.dom.body.addEventListener('touchstart', function(evt) {
        var imageEl = evt.target || evt.srcElement;
        if (imageEl.classList.contains('movie-image')) {
            imageEl.classList.add('dark');
            Netflix.dom.elementInTouch = imageEl;
        }
    }, false);

    Netflix.dom.body.addEventListener('touchend', function(evt) {
        Netflix.dom.elementInTouch &&
            Netflix.dom.elementInTouch.classList.remove('dark');
        delete Netflix.dom.elementInTouch;
    }, false);

    return function () {
        for (var list in movieList) {
            var movieGroupList = new Netflix.listView(movieList[list]);
            movieGroupList
                .renderTo(Netflix.dom.body)
                .renderMovieList();
        };

        Netflix.view.detailToggle(false);
    };
}());
