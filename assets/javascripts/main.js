(function () {
  'use strict';

  function colorize () {
    $('.page-content a').filter(function (i, el) {
      var $el = $(el);
      if ($el.find('img').length || $el.closest('.tags > li').length) {
        el.className += ' no-underline';
        return false;
      }
      return true;
    }).each(function (i, el) {
      el.className = 'color-' + i % 4 + ' ' + el.className;
    });
  }

  document.addEventListener('DOMContentLoaded', colorize, false);
})();

