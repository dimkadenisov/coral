var SrcsetPolyfill = (function () {
'use strict';

function findOne(selector, el) {
  var found = find(selector, el);

  if (found.length) {
    return found[0];
  }

  return null;
}

function isWindow(obj) {
  return obj != null && obj === obj.window;
}

function find(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (selector instanceof HTMLElement || selector instanceof Node || isWindow(selector)) {
    return [selector];
  } else if (selector instanceof NodeList) {
    return [].slice.call(selector);
  } else if (typeof selector === 'string') {
    var startElement = context ? findOne(context) : document;
    return [].slice.call(startElement.querySelectorAll(selector));
  }
  return [];
}

function on(selector, event, cb) {
  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (Array.isArray(selector)) {
    selector.forEach(function (item) {
      return on(item, event, cb, capture);
    });
    return;
  }

  var data = {
    cb: cb,
    capture: capture
  };

  if (!window._domassistevents) {
    window._domassistevents = {};
  }

  window._domassistevents['_' + event] = data;
  var el = find(selector);
  if (el.length) {
    el.forEach(function (item) {
      item.addEventListener(event, cb, capture);
    });
  }
}

var NativeCustomEvent = window.CustomEvent;

//
// Check for the usage of native support for CustomEvents which is lacking
// completely on IE.
//
function canIuseNativeCustom() {
  try {
    var p = new NativeCustomEvent('t', {
      detail: {
        a: 'b'
      }
    });
    return p.type === 't' && p.detail.a === 'b';
  } catch (e) {
    return false;
  }
}

// Lousy polyfill for the Custom Event constructor for IE.
var IECustomEvent = function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');

  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, undefined);
  }

  return e;
};

var DomassistCustomEvent = canIuseNativeCustom() ? NativeCustomEvent : IECustomEvent;

var SCROLLABLE_CONTAINER = void 0;

function getScrollableContainer() {
  if (SCROLLABLE_CONTAINER) {
    return SCROLLABLE_CONTAINER;
  }

  var documentElement = window.document.documentElement;
  var scrollableContainer = void 0;

  documentElement.scrollTop = 1;

  if (documentElement.scrollTop === 1) {
    documentElement.scrollTop = 0;
    scrollableContainer = documentElement;
  } else {
    scrollableContainer = document.body;
  }

  SCROLLABLE_CONTAINER = scrollableContainer;

  return scrollableContainer;
}

SCROLLABLE_CONTAINER = getScrollableContainer();

/* global DocumentTouch */

var debounce$1 = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = this;
    var args = arguments; // eslint-disable-line prefer-rest-params
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/* eslint-env browser */
function srcsetPolyfill() {
  var tImg = document.createElement('img');
  var isWSupported = 'sizes' in tImg;

  if (!isWSupported) {
    // Get all the pictures
    var pictures = find('picture');
    var matchMediaSupported = typeof window.matchMedia === 'function';

    // If any
    if (pictures.length) {
      pictures.forEach(function (picture) {
        // Get all sources and images
        var sources = find('source', picture);
        var img = findOne('img', picture);
        var source = null;

        // If match media isn't supported, we'll fallback to the default (mobile) image
        if (matchMediaSupported) {
          for (var i = 0, len = sources.length; i < len && !source; i++) {
            var media = sources[i].getAttribute('media');

            if (window.matchMedia(media).matches) {
              source = sources[i].getAttribute('srcset');
            }
          }
        }

        // If no matchmedia or no matches
        if (!source) {
          source = img.getAttribute('srcset');
        }

        img.src = source;
      });

      // If matchmedia is supported, allow resizing to act like real picture
      if (matchMediaSupported) {
        on(window, 'resize', debounce$1(srcsetPolyfill, 150));
      }
    }
    return pictures;
  }
}

return srcsetPolyfill;

}());

//# sourceMappingURL=srcset-polyfill.js.map