'use strict';

var Netflix = Netflix || {};

document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
}, false);

Netflix.init && Netflix.init();
