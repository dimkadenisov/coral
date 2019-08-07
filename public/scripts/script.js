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

$('.catalog-item .button_heart').click(function () {
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
$('.catalog-item__buy').click(function () {
  $(this).toggleClass('button_red');
  $(this).toggleClass('button_gray');
  $(this).toggleClass('catalog-item__buy_clicked');
});
var newArrivalsDates = $('.dates-swiper').length ? new Swiper('.dates-swiper', {
  slideClass: 'date',
  slidesPerView: 7,
  spaceBetween: 0,
  allowTouchMove: false,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  breakpoints: {
    991: {
      slidesPerView: 4,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next'
      }
    },
    767: {
      slidesPerView: 2,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next'
      }
    },
    575: {
      slidesPerView: 3,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next'
      }
    }
  }
}) : false;

var generateSwipers = function generateSwipers(swiperClass, swiperConfig) {
  if (!$('.' + swiperClass).length) return false;
  var itemsSwipersNodes = $('.' + swiperClass);
  var swipers = {};
  itemsSwipersNodes.each(function (index) {
    $(this).addClass(swiperClass + '-' + index);
    swipers[index] = new Swiper('.' + swiperClass + '-' + index, swiperConfig);
  });
  return swipers;
};

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

(function () {
  if ($('.items-swiper').length === 0) return false;
  var breakpoints = [window.matchMedia('(max-width: 991px)'), window.matchMedia('(max-width: 767px)'), window.matchMedia('(max-width: 575px)')];
  var itemsSwiperConfig = {
    slideClass: 'catalog-item',
    slidesPerView: 5,
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
      1343: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
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
      if (breakpoint.matches) return generateSwipers('items-swiper', itemsSwiperConfig);
    });
  };

  generateSwipers('items-swiper', itemsSwiperConfig);

  for (var i = 0; i < breakpoints.length; i++) {
    var breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }

  breakpointChecker();
})();

var newArrrivalsSwiper = $('.new-arrivals__swiper').length ? new Swiper('.new-arrivals__swiper', {
  slideClass: 'new-arrivals__slide',
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,
  thumbs: {
    swiper: newArrivalsDates,
    slideThumbActiveClass: 'date_active'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true
}) : false;

var updateSwiperInstance = function updateSwiperInstance(swiper) {
  if (!swiper) return;
  var breakpoints = [window.matchMedia('(max-width: 1199px)'), window.matchMedia('(max-width: 991px)'), window.matchMedia('(max-width: 767px)'), window.matchMedia('(max-width: 575px)')];

  var breakpointChecker = function breakpointChecker() {
    for (var i = 0; i < breakpoints.length; i++) {
      var breakpoint = breakpoints[i];
      if (breakpoint.matches) swiper.update();
    }
  };

  for (var i = 0; i < breakpoints.length; i++) {
    var breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }

  breakpointChecker();
};

updateSwiperInstance(newArrrivalsSwiper);
$('.header .search-form__button_open').click(function () {
  $(this).parent().toggleClass('search-form_opened');
});
var seenedItems = $('.seened-items__swiper').length ? new Swiper('.seened-items__swiper', {
  slideClass: 'catalog-item',
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: false,
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
      slidesPerView: 3
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
      allowTouchMove: true
    }
  }
}) : false;
$('.sort-block__change-layout-button').click(function () {
  if (!$(this).hasClass('sort-block__change-layout-button_active')) {
    $('.sort-block__change-layout-button').removeClass('sort-block__change-layout-button_active');
    $(this).addClass('sort-block__change-layout-button_active');
  }
});
var textPageSwipersConfig = {
  slideClass: 'photo-gallery__item',
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
var textPageSwipers = generateSwipers('photo-gallery', textPageSwipersConfig);