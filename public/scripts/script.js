"use strict";

(function () {
  if ($('.benefits__items').length === 0) return;
  var breakpoints = [window.matchMedia('(min-width: 768px)')];
  var benefitsSwiper;

  var breakpointChecker = function breakpointChecker() {
    for (var i = 0; i < breakpoints.length; i++) {
      var breakpoint = breakpoints[i];

      if (breakpoint.matches) {
        if (benefitsSwiper !== undefined) benefitsSwiper.destroy(true, true);
        return;
      } else if (!breakpoint.matches) {
        if (benefitsSwiper !== undefined) benefitsSwiper.destroy();
        return enableSwiper();
      }
    }
  };

  var enableSwiper = function enableSwiper() {
    benefitsSwiper = new Swiper('.benefits__items', {
      breakpoints: {
        767: {
          slideClass: 'benefit-item',
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            el: '.pagination',
            bulletElement: 'div',
            bulletClass: 'pagination__item',
            bulletActiveClass: 'pagination__item_active'
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          observer: true,
          observerParents: true,
          observeSlideChildren: true
        },
        575: {
          slideClass: 'benefit-item',
          slidesPerView: 1,
          spaceBetween: 0,
          pagination: {
            el: '.pagination',
            bulletElement: 'div',
            bulletClass: 'pagination__item',
            bulletActiveClass: 'pagination__item_active'
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          observer: true,
          observerParents: true,
          observeSlideChildren: true
        }
      }
    });
  };

  for (var i = 0; i < breakpoints.length; i++) {
    var breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }

  breakpointChecker();
})();

$('.filter-row-trigger').click(function (e) {
  e.preventDefault();
  if ($(window).width() > 991) $(this).closest('.filter-row').toggleClass('active');
});

(function () {
  var timer;

  window.onresize = function () {
    if (timer) clearTimeout(timer);

    if ($(window).width() > 991) {
      timer = setTimeout(function () {
        $('#catalog-filter').css('display', 'block');
      }, 100);
    }
  };
})();

$('.button_heart').click(function () {
  $(this).toggleClass('button_heart_clicked');

  if ($(this).hasClass('button_heart_clicked')) {
    $(this).attr('data-description', 'Удалить товар из избранного');
    $(this).css({
      'display': 'flex'
    });
  } else {
    $(this).attr('data-description', 'Добавить товар в избранное');
    $(this).removeAttr('style');
  }
});
$('.buy-button').click(function () {
  $(this).toggleClass('button_red');
  $(this).toggleClass('button_gray');
  $(this).toggleClass('buy-button_clicked');
});

function generateCatalogItemSwipers() {
  var catalogItemSwiperConfig = {
    slideClass: 'catalog-item__slide',
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
    runCallbacksOnInit: false,
    allowTouchMove: true,
    observer: true,
    observerParents: true,
    observeSlideChildren: true
  };
  var catalogItemSwipers = generateSwipers({
    swiperClass: 'catalog-item__swiper',
    swiperConfig: catalogItemSwiperConfig
  });
  $('.catalog-item').on('mouseenter', function () {
    var index = getSwiperIndex.call(this, 'catalog-item__swiper');
    catalogItemSwipers[index].params.autoplay.delay = 1300;
    catalogItemSwipers[index].params.autoplay.waitForTransition = false;
    catalogItemSwipers[index].autoplay.start();
  });
  $('.catalog-item').on('mouseleave', function () {
    var idClass = $.grep(this.querySelector('.catalog-item__swiper').className.split(/\s+/), function (item) {
      return item.match(/catalog-item__swiper-\d*$/);
    });
    var id = idClass[0].match(/\d*$/)[0];
    catalogItemSwipers[id].autoplay.stop();
  });
  return catalogItemSwipers;
}

;

function generateNewArrivalsDates() {
  var newArrivalsDatesConfig = {
    slideClass: 'date',
    slidesPerView: 7,
    spaceBetween: 0,
    allowTouchMove: false,
    observer: true,
    observerParents: true,
    observeSlideChildren: true,
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    },
    breakpoints: {
      991: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 2,
        allowTouchMove: true
      },
      575: {
        slidesPerView: 3
      }
    }
  };
  return generateSwipers({
    swiperClass: 'dates-swiper',
    swiperConfig: newArrivalsDatesConfig
  });
}

;

function generateSwipers(_ref) {
  var _ref$swiperClass = _ref.swiperClass,
      swiperClass = _ref$swiperClass === void 0 ? false : _ref$swiperClass,
      _ref$swiperConfig = _ref.swiperConfig,
      swiperConfig = _ref$swiperConfig === void 0 ? false : _ref$swiperConfig,
      _ref$thumbsClass = _ref.thumbsClass,
      thumbsClass = _ref$thumbsClass === void 0 ? false : _ref$thumbsClass,
      _ref$thumbsConfig = _ref.thumbsConfig,
      thumbsConfig = _ref$thumbsConfig === void 0 ? false : _ref$thumbsConfig;
  if (!$('.' + swiperClass).length) return false;
  var thumbs = $('.' + thumbsClass).length && thumbsConfig ? generateSwipers({
    swiperClass: thumbsClass,
    swiperConfig: thumbsConfig
  }) : false;
  var itemsSwipersNodes = $('.' + swiperClass);
  var swipers = [];
  itemsSwipersNodes.each(function (index) {
    $(this).addClass(swiperClass + '-' + index);
    if (thumbs) swiperConfig.thumbs.swiper = thumbs[index];
    swipers[index] = new Swiper('.' + swiperClass + '-' + index, swiperConfig);
    swipers[index].id = index;
  });
  return swipers;
}

;

function getSwiperIndex(swiperBaseClass) {
  var regexp = new RegExp(swiperBaseClass + '-' + '\\d*$');
  var indexClass = $.grep(this.querySelector('.' + swiperBaseClass).className.split(/\s+/), function (item) {
    return item.match(regexp);
  });
  var index = indexClass[0].match(/\d*$/)[0];
  return index;
}

;
'use strict';

var openBurgerMenu = function openBurgerMenu() {
  $('.burger-menu').addClass('burger-menu_clicked');
  $('body').addClass('overflow_hidden');
  $('.header+.overlay').addClass('d-block');
  $('.header-line').addClass('header-line_opened');
  $('.header__content').addClass('header__content_opened');
  $('.site-sections').addClass('site-sections_opened');
  $('.top-line').addClass('top-line_opened');
  $('.contacts-burger').addClass('contacts-burger_opened');
};

var closeBurgerMenu = function closeBurgerMenu() {
  $('.burger-menu').removeClass('burger-menu_clicked');
  $('body').removeClass('overflow_hidden');
  $('.header+.overlay').removeClass('d-block');
  $('.header-line').removeClass('header-line_opened');
  $('.header__content').removeClass('header__content_opened');
  $('.site-sections').removeClass('site-sections_opened');
  $('.top-line').removeClass('top-line_opened');
  $('.contacts-burger').removeClass('contacts-burger_opened');
  closeSubMenu();
};

var toggleBurgerMenu = function toggleBurgerMenu() {
  return $('.header-line').hasClass('header-line_opened') ? closeBurgerMenu() : openBurgerMenu();
};

var openSubMenu = function openSubMenu(event) {
  if ($('.site-sections').hasClass('site-sections_opened') || $('.site-sections').hasClass('site-sections_scrolled')) {
    event.preventDefault();
    $(event.target).addClass('site-sections__link_opened');
    $(event.target).closest('.site-sections__list').children('.site-sections__list-item').addClass('d-none');
    $(event.target).next().addClass('d-block');
    $(event.target).parent().removeClass('d-none');
    $('.top-line').addClass('d-none');
  }
};

var closeSubMenu = function closeSubMenu() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (event) event.preventDefault();
  $('.site-sections__link_opened').closest('.site-sections__list').children('.site-sections__list-item').removeClass('d-none');
  $('.site-sections__link_opened').next().removeClass('d-block');
  $('.site-sections__link_opened').removeClass('site-sections__link_opened');
  $('.top-line').removeClass('d-none');
};

var toggleSubMenuState = function toggleSubMenuState(event) {
  return $('.site-sections__link').hasClass('site-sections__link_opened') ? closeSubMenu(event) : openSubMenu(event);
};

var addScrollHeader = function addScrollHeader() {
  if ($(window).width() >= 1200) {
    $('.header').addClass('header_scrolled');
    $('.header__content').addClass('header__content_scrolled');
    $('.phone-block__description').addClass('d-none');
    $('.basket__description').addClass('d-none');
    $('.burger-menu').addClass('d-block');
    $('.header-line__content').addClass('header-line__content_scrolled');
    $('.site-sections').addClass('site-sections_scrolled');
    $('.top-line').addClass('top-line_scrolled');
    $('.header-line__logo').addClass('d-none');
    $('.header-line__logo_scrolled').removeClass('d-none');
  }
};

var removeScrollHeader = function removeScrollHeader() {
  $('.header').removeClass('header_scrolled');
  $('.header__content').removeClass('header__content_scrolled');
  $('.phone-block__description').removeClass('d-none');
  $('.basket__description').removeClass('d-none');
  $('.burger-menu').removeClass('d-block');
  $('.header-line__content').removeClass('header-line__content_scrolled');
  $('.site-sections').removeClass('site-sections_scrolled');
  $('.top-line').removeClass('top-line_scrolled');
  $('.header-line__logo').removeClass('d-none');
  $('.header-line__logo_scrolled').addClass('d-none');
};

var toggleScrollHeader = function toggleScrollHeader() {
  return window.pageYOffset >= 140 ? addScrollHeader() : removeScrollHeader();
};

$('.burger-menu').click(toggleBurgerMenu);
$('.site-sections__link:not(:only-child)').click(toggleSubMenuState);
$(window).scroll(toggleScrollHeader);
var heroSwiper = $('.hero-swiper').length ? new Swiper('.hero-swiper', {
  slideClass: 'hero-swiper__slide',
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  },
  pagination: {
    el: '.pagination',
    bulletElement: 'div',
    bulletClass: 'pagination__item',
    bulletActiveClass: 'pagination__item_active'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true
}) : false;
$('.item-card .button_heart').click(function () {
  if ($(this).hasClass('button_heart_clicked')) {
    $(this).find('.button__text').text('В избранном');
  } else {
    $(this).find('.button__text').text('В избранное');
  }
});
$('.item-card .buy-button').click(function () {
  $(this).hasClass('buy-button_clicked') ? $(this).find('.button__text').text("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\xA0\u043A\u043E\u0440\u0437\u0438\u043D\u044B") : $(this).find('.button__text').text('В корзину');
});
var productSwiperConfig = {
  slideClass: 'item-gallery__slide',
  slidesPerView: 1,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  pagination: {
    el: '.pagination',
    bulletElement: 'div',
    bulletClass: 'pagination__item',
    bulletActiveClass: 'pagination__item_active'
  },
  thumbs: {
    swiper: {
      el: '.product__thumbs',
      slideClass: 'item-gallery__slide',
      slidesPerView: 3,
      spaceBetween: 15,
      allowTouchMove: false,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next'
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }
    }
  }
};
var productSwiper = $('.product__swiper').length ? new Swiper('.product__swiper', productSwiperConfig) : false;
$('.product__thumbs').on('mouseenter', '.item-gallery__slide', function () {
  productSwiper.slideTo($(this).index(), 0, false);
});

var incrementDecrementValue = function incrementDecrementValue() {
  var input = $(this).next().hasClass('input-field_underlined') ? $(this).next() : $(this).prev();
  var operation = $(this).next().hasClass('input-field_underlined') ? 'decrement' : 'increment';
  var step = +input.attr('step') || 1;
  var maxValue = +input.attr('max') || 100;
  var minValue = +input.attr('min') || 0;
  var value = +input.val() || 0;

  switch (operation) {
    case 'increment':
      value = value + step >= maxValue ? maxValue : value + step;
      input.val(value);
      break;

    case 'decrement':
      value = value - step <= minValue ? minValue : value - step;
      input.val(value);
      break;
  }
};

$('.items-counter .button').click(incrementDecrementValue);

function generateItemsSwipers() {
  var itemsSwiperConfig = {
    slideClass: 'catalog-item',
    slidesPerView: 5,
    spaceBetween: 30,
    watchOverflow: true,
    allowTouchMove: false,
    pagination: {
      el: '.pagination',
      bulletElement: 'div',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item_active'
    },
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    observer: true,
    observerParents: true,
    observeSlideChildren: true,
    breakpoints: {
      1343: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2,
        allowTouchMove: true
      },
      575: {
        slidesPerView: 1,
        allowTouchMove: true
      }
    }
  };
  return generateSwipers({
    swiperClass: 'items-swiper',
    swiperConfig: itemsSwiperConfig
  });
}

;

function generateNewArrrivalsSwiper(thumbs) {
  var newArrivalsSwiperConfig = {
    slideClass: 'new-arrivals__slide',
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    watchOverflow: true,
    thumbs: {
      swiper: thumbs,
      slideThumbActiveClass: 'date_active'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    observer: true,
    observerParents: true,
    observeSlideChildren: true
  };
  return generateSwipers({
    swiperClass: 'new-arrivals__swiper',
    swiperConfig: newArrivalsSwiperConfig
  });
}

;

function renderIndexSwipers() {
  var thumbs = generateNewArrivalsDates();
  generateNewArrrivalsSwiper(thumbs[0]);
  generateItemsSwipers();
  generateCatalogItemSwipers();
}

;
renderIndexSwipers();
var photoSwiperConfig = {
  slideClass: 'photo-swiper__item',
  slidesPerView: 3,
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      allowTouchMove: true,
      pagination: {
        el: '.pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active'
      }
    },
    575: {
      slidesPerView: 1,
      allowTouchMove: true,
      pagination: {
        el: '.pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active'
      }
    }
  }
};
var photoSwipers = generateSwipers({
  swiperClass: 'photo-swiper',
  swiperConfig: photoSwiperConfig
});
$('.product-types .button').click(function () {
  $(this).closest('.product-types').find('.product-types__list').addClass('product-types__list_opened');
  $(this).addClass('d-none');
});
$('.catalog-item__quick-view').click(function () {
  $.fancybox.open({
    src: '#quick-view',
    type: 'inline',
    touch: false
  });
  var quickViewSwiperConfig = {
    slideClass: 'item-gallery__slide',
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    pagination: {
      el: '.pagination',
      bulletElement: 'div',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item_active'
    },
    thumbs: {
      swiper: {
        el: '.quick-view__thumbs',
        slideClass: 'item-gallery__slide',
        slidesPerView: 3,
        spaceBetween: 15,
        allowTouchMove: false,
        navigation: {
          prevEl: '.prev',
          nextEl: '.next'
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        }
      }
    }
  };
  var quickViewSwiperSwiper = $('.quick-view__swiper') ? new Swiper('.quick-view__swiper', quickViewSwiperConfig) : false;
  $('.quick-view__thumbs').on('mouseenter', '.item-gallery__slide', function () {
    quickViewSwiperSwiper.slideTo($(this).index(), 0, false);
  });
});

(function () {
  var timer;

  window.onresize = function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      if ($(window).width() < 992) $.fancybox.close(true);
    }, 100);
  };
})();

$('.rating__star').click(function () {
  if ($(this).closest('.rating').attr('data-disabled')) return;
  $(this).closest('.rating').find('.rating__star').each(function () {
    $(this).removeClass('rating__star_active');
  });
  $(this).addClass('rating__star_active');
  $(this).closest('.rating').attr('data-value', $(this).attr('data-value'));
  $(this).closest('.rating').attr('data-disabled', 'data-disabled');
});
var reviewsSwiperConfig = {
  slideClass: 'review',
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,
  allowTouchMove: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  breakpoints: {
    991: {
      slideClass: 'review',
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
      allowTouchMove: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      observer: true,
      observerParents: true,
      observeSlideChildren: true,
      pagination: {
        el: '.pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
        clickable: true
      }
    }
  }
};
var reviewsSwiperBreakpoints = [991];
var reviewsSwipers = updateSwiperOnBreakpoint('reviews-swiper', reviewsSwiperConfig, reviewsSwiperBreakpoints);
$('.header .search-form__button_open').click(function () {
  $(this).parent().toggleClass('search-form_opened');
});

(function () {
  if ($('.seened-items__swiper').length === 0) return false;
  var breakpoints = [window.matchMedia('(max-width: 767px)'), window.matchMedia('(min-width: 768px)')];
  var seenedItemsConfig = {
    slideClass: 'catalog-item',
    slidesPerView: 4,
    spaceBetween: 30,
    allowTouchMove: false,
    watchOverflow: true,
    pagination: {},
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    navigation: {
      prevEl: '.prev',
      nextEl: '.next',
      disabledClass: 'visually-hidden'
    },
    observer: true,
    observerParents: true,
    observeSlideChildren: true,
    breakpoints: {
      1343: {
        slidesPerView: 3,
        pagination: {}
      },
      991: {
        slidesPerView: 3,
        pagination: {}
      },
      767: {
        slidesPerView: 2,
        allowTouchMove: true,
        pagination: {
          el: '.pagination',
          bulletElement: 'div',
          bulletClass: 'pagination__item',
          bulletActiveClass: 'pagination__item_active'
        }
      },
      575: {
        slidesPerView: 1,
        allowTouchMove: true,
        pagination: {
          el: '.pagination',
          bulletElement: 'div',
          bulletClass: 'pagination__item',
          bulletActiveClass: 'pagination__item_active'
        }
      }
    }
  };

  var breakpointChecker = function breakpointChecker() {
    breakpoints.forEach(function (breakpoint) {
      if (breakpoint.matches) return generateSwipers({
        swiperClass: 'seened-items__swiper',
        swiperConfig: seenedItemsConfig
      });
    });
  };

  generateSwipers({
    swiperClass: 'seened-items__swiper',
    swiperConfig: seenedItemsConfig
  });

  for (var i = 0; i < breakpoints.length; i++) {
    var breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }

  breakpointChecker();
})();

$('.show-more-button').click(function () {
  if ($(this).closest('.tags').hasClass('tags_show-all')) {
    $(this).text('Показать еще');
  } else {
    $(this).text('Скрыть');
  }

  $(this).closest('.tags').toggleClass('tags_show-all');
});

function updateSwiperOnBreakpoint(swiperClass, swiperConfig, maxWidthsArray) {
  if ($('.' + swiperClass).length === 0) return false;
  var breakpoints = [];
  maxWidthsArray.forEach(function (item) {
    breakpoints.push(window.matchMedia("(max-width: ".concat(item, "px)")));
    breakpoints.push(window.matchMedia("(min-width: ".concat(item + 1, "px)")));
  });
  var swipers = generateSwipers({
    swiperClass: swiperClass,
    swiperConfig: swiperConfig
  });

  var breakpointChecker = function breakpointChecker() {
    breakpoints.forEach(function (breakpoint) {
      if (breakpoint.matches) {
        swipers.forEach(function (item) {
          item.destroy();
        });
        swipers = generateSwipers({
          swiperClass: swiperClass,
          swiperConfig: swiperConfig
        });
      }
    });
  };

  breakpoints.forEach(function (breakpoint) {
    breakpoint.addListener(breakpointChecker);
  });
  breakpointChecker();
  return swipers;
}

;