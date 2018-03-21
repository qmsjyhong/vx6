(function(doc, win) {
  var _root = doc.documentElement,
    resizeEvent = 'orientationchange' in win ? 'orientationchange' : 'resize',
    resizeCallback = function() {
      var clientWidth = _root.clientWidth;

      _root.style.fontSize = parseInt(clientWidth / 7.2) + 'px';
      document.body && (document.body.style.fontSize = 0.28 + 'rem');
    };

  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvent, resizeCallback, false);
  doc.addEventListener('DOMContentLoaded', resizeCallback, false);

  win.overscroll = function(el) {
    el.addEventListener('touchstart', function() {
      var top = el.scrollTop,
        totalScroll = el.scrollHeight,
        currentScroll = top + el.offsetHeight;

      if (top === 0) {
        el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        el.scrollTop = top - 1;
      }
    });

    el.addEventListener('touchmove', function(evt) {
      if (el.offsetHeight < el.scrollHeight) {
        evt._isScroller = true;
      }
    });
  };

  var ua = win.navigator.userAgent.toLowerCase();
})(document, window);