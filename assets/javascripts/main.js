(function () {
  'use strict';

  function colorize () {
    var links = document.querySelectorAll('a');
    if (links && links.length) {
      links = Array.prototype.slice.call(links);
    }

    links.forEach(function (el, i) {
      el.className = 'color-' + i % 3 + ' ' + el.className;
    });
  }

  document.addEventListener('DOMContentLoaded', colorize, false);
})();

