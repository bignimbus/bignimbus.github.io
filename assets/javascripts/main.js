(function () {
  'use strict';

  var $body = $(document.body);

  function colorize () {
    $('.page-content *:not(.social-media-list) a').filter(function (i, el) {
      var $el = $(el),
        shouldColorize = $el.find('img').length
          || $el.closest('.tags > li, .social-media-list').length;
      if (shouldColorize) {
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
    $body.toggleClass('show-menu', window.location.hash === '#menu');
  }

  $(colorize);
  $(toggleMenuState);
  $(document.body).on('click', '.blog-title', toggleHash);
  $(window).on('hashchange', toggleMenuState);
})();

