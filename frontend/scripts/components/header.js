'use strict'

const openBurgerMenu = () => {
  $('.burger-menu').addClass('burger-menu_clicked');
  $('body').addClass('overflow_hidden');
  $('.header+.overlay').addClass('d-block');
  $('.header-line').addClass('header-line_opened');
  $('.header__content').addClass('header__content_opened');
  $('.site-sections').addClass('site-sections_opened');
  $('.top-line').addClass('top-line_opened');
  $('.contacts-burger').addClass('contacts-burger_opened');
};

const closeBurgerMenu = () => {
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

const toggleBurgerMenu = () => {
  return $('.header-line').hasClass('header-line_opened') ? closeBurgerMenu() : openBurgerMenu();
};

const openSubMenu = function(event) {
  if ($('.site-sections').hasClass('site-sections_opened') || $('.site-sections').hasClass('site-sections_scrolled')) {
    event.preventDefault();
    $(event.target).addClass('site-sections__link_opened');
    $(event.target).closest('.site-sections__list').children('.site-sections__list-item').addClass('d-none');
    $(event.target).next().addClass('d-block');
    $(event.target).parent().removeClass('d-none');
    $('.top-line').addClass('d-none');
  }
};

const closeSubMenu = (event = false) => {
  if(event) event.preventDefault();
  $('.site-sections__link_opened').closest('.site-sections__list').children('.site-sections__list-item').removeClass('d-none');
  $('.site-sections__link_opened').next().removeClass('d-block');
  $('.site-sections__link_opened').removeClass('site-sections__link_opened');
  $('.top-line').removeClass('d-none');
};

const toggleSubMenuState = (event) => {
  return $('.site-sections__link').hasClass('site-sections__link_opened') ? closeSubMenu(event) : openSubMenu(event);
}

const addScrollHeader = () => {
  if(($(window).width() >= 1200)) {
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

const removeScrollHeader = () => {
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

const toggleScrollHeader = () => {
  return (window.pageYOffset >= 140) ? addScrollHeader() : removeScrollHeader();
}

$('.burger-menu').click(toggleBurgerMenu);

$('.site-sections__link:not(:only-child').click(toggleSubMenuState);

$(window).scroll(toggleScrollHeader);
