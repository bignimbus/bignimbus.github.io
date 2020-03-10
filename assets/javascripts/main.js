!function(e){"use strict";function t(t){var n=e(t),a=e(":focus"),r=0;if(1===a.length){var i=n.index(a);i+1<n.length&&(r=i+1)}n.eq(r).focus()}function n(t){var n=e(t),a=e(":focus"),r=n.length-1;if(1===a.length){var i=n.index(a);i>0&&(r=i-1)}n.eq(r).focus()}function a(t){function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a,r,i,u=t.nodeName.toLowerCase(),o=!isNaN(e.attr(t,"tabindex"));return"area"===u?(a=t.parentNode,r=a.name,t.href&&r&&"map"===a.nodeName.toLowerCase()?(i=e("img[usemap=#"+r+"]")[0],!!i&&n(i)):!1):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||o:o)&&n(t)}e.focusNext=function(){t(":focusable")},e.focusPrev=function(){n(":focusable")},e.tabNext=function(){t(":tabbable")},e.tabPrev=function(){n(":tabbable")},e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,a){return!!e.data(t,a[3])},focusable:function(t){return a(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&a(t,!r)}})}(jQuery);

var TABBABLE_ATTR = 'data-tabbable';
var TABBABLE_SELECTOR = '[data-tabbable=true]';

(function () {
  'use strict';

  $(':tabbable').attr(TABBABLE_ATTR, 'true');

  var $body = $(document.body);
  var $main = $('#main-content');
  var $menu = $('#menu-content');

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

  function setContentVisibility ($el, visible) {
    $el.attr('aria-hidden', (!visible).toString());
    var $tabbable = $el.find(TABBABLE_SELECTOR);
    var tabIndex = visible ? '0' : '-1';
    $tabbable.attr('tabindex', tabIndex);
  }

  function toggleContentVisibilityForScreenReader (menuOpen) {
    setContentVisibility($menu, menuOpen);
    setContentVisibility($main, !menuOpen);
  }

  function toggleHash () {
    var menuWasOpen = Boolean(window.location.hash.replace('#', ''));
    window.location.hash = menuWasOpen ? '' : 'menu';
    toggleContentVisibilityForScreenReader(!menuWasOpen);
  }

  function toggleHashIfEnterOrSpace (e) {
    var isSpaceOrEnter = (
      e.which === 13 ||
        e.which === 32
    );
    if (isSpaceOrEnter) {
      e.preventDefault();
      toggleHash();
    }
  }

  function toggleMenuState () {
    var menuOpen = window.location.hash === '#menu';
    $body.toggleClass('show-menu', menuOpen);
    if (menuOpen) {
      toggleContentVisibilityForScreenReader(menuOpen);
    }
  }

  $(colorize);
  $(toggleMenuState);
  $body.on('click', '.blog-title', toggleHash);
  $body.on('keydown', '.blog-title', toggleHashIfEnterOrSpace);
  $(window).on('hashchange', toggleMenuState);
})();

