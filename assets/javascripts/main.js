(function () {
  'use strict';

  var $main = $('#main-content'),
    $menu = $('#menu-content');

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

  function toggleHash () {
    window.location.hash = window.location.hash ? '' : 'menu';
  }

  function toggleMenuState () {
    $main.toggleClass('hide', window.location.hash === '#menu');
    $menu.toggleClass('hide', window.location.hash === '');
  }

  $(colorize);
  $(toggleMenuState);
  $(document.body).on('click', '.blog-title', toggleHash);
  $(window).on('hashchange', toggleMenuState);
})();

