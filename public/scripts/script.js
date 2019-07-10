"use strict";

var changeHeaderState = function changeHeaderState() {
  $('body').toggleClass('overflow_hidden');
  $('.header-line').toggleClass('header-line_opened');
  $('.header__content').toggleClass('header__content_opened');
  $('.site-sections').toggleClass('site-sections_opened');
  $('.top-line').toggleClass('top-line_opened');
  $('.contacts-burger').toggleClass('contacts-burger_opened');
};

var changeSubMenuState = function changeSubMenuState(event) {
  event.preventDefault();
  $(event.currentTarget).toggleClass('site-sections__link_opened');
  $('.header .overlay_white').toggleClass('d-block');
};

$('.burger-menu__checkbox').click(changeHeaderState);
$('.site-sections__link:not(:only-child').click(changeSubMenuState);