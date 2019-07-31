"use strict";

(function () {
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

var newArrivalsDates = new Swiper('.dates-swiper', {
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
      slidesPerView: 2
    },
    575: {
      slidesPerView: 3
    }
  }
});
'use strict';

var openBurgerMenu = function openBurgerMenu() {
  $('body').addClass('overflow_hidden');
  $('.header+.overlay').addClass('d-block');
  $('.header-line').addClass('header-line_opened');
  $('.header__content').addClass('header__content_opened');
  $('.site-sections').addClass('site-sections_opened');
  $('.top-line').addClass('top-line_opened');
  $('.contacts-burger').addClass('contacts-burger_opened');
};

var closeBurgerMenu = function closeBurgerMenu() {
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
  event.preventDefault();
  $('.site-sections__link_opened').closest('.site-sections__list').children('.site-sections__list-item').removeClass('d-none');
  $('.site-sections__link_opened').next().removeClass('d-block');
  $('.site-sections__link_opened').removeClass('site-sections__link_opened');
  $('.top-line').removeClass('d-none');
};

var toggleSubMenuState = function toggleSubMenuState(event) {
  return $('.site-sections__link').hasClass('site-sections__link_opened') ? closeSubMenu() : openSubMenu(event);
};

var addScrollHeader = function addScrollHeader() {
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

$('.burger-menu__checkbox').click(toggleBurgerMenu);
$('.site-sections__link:not(:only-child').click(toggleSubMenuState);
$(window).scroll(toggleScrollHeader);
var heroSwiper = new Swiper('.hero-swiper', {
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
});

var generateItemsSwipers = function generateItemsSwipers() {
  var itemsSwipersNodes = $('.items-swiper');
  var swipers = {};
  itemsSwipersNodes.each(function (index) {
    $(this).addClass("items-swiper-".concat(index));
    swipers[index] = new Swiper(".items-swiper-".concat(index), {
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
          slidesPerView: 2
        },
        575: {
          slidesPerView: 1
        }
      }
    });
  });
};

generateItemsSwipers();
$('.button_heart').click(function () {
  $(this).find('#gold').addClass('qwe');
});
var newArrrivalsSwiper = new Swiper('.new-arrivals__swiper', {
  slideClass: 'new-arrivals__slide',
  slidesPerView: 1,
  spaceBetween: 30,
  allowTouchMove: false,
  thumbs: {
    swiper: newArrivalsDates,
    slideThumbActiveClass: 'date_active'
  },
  // navigation: {
  //   prevEl: '.prev',
  //   nextEl: '.next',
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true
});