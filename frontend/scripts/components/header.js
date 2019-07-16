const openBurgerMenu = () => {
  $('body').addClass('overflow_hidden');
  $('.header+.overlay').addClass('d-block');
  $('.header-line').addClass('header-line_opened');
  $('.header__content').addClass('header__content_opened');
  $('.site-sections').addClass('site-sections_opened');
  $('.top-line').addClass('top-line_opened');
  $('.contacts-burger').addClass('contacts-burger_opened');
};

const closeBurgerMenu = () => {
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

const openSubMenu = (event) => {
  event.preventDefault()
  $(event.target).addClass('site-sections__link_opened');
  $(event.target).closest('.site-sections__list').children('.site-sections__list-item').addClass('d-none');
  $(event.target).parent().removeClass('d-none');
  $('.top-line').addClass('d-none');
};

const closeSubMenu = () => {
  $('.site-sections__link_opened').closest('.site-sections__list').children('.site-sections__list-item').removeClass('d-none');
  $('.site-sections__link_opened').removeClass('site-sections__link_opened');

  $('.top-line').removeClass('d-none');
};

const toggleSubMenuState = (event) => {
  event.preventDefault();

  return $('.site-sections__link').hasClass('site-sections__link_opened') ? closeSubMenu() : openSubMenu(event);
}


const changeSubMenuState = (event) => {
  event.preventDefault();
  $(event.currentTarget).toggleClass('site-sections__link_opened');
  $(event.currentTarget).closest('.site-sections__list').children('.site-sections__list-item').toggleClass('d-none');
  $(event.currentTarget).parent().toggleClass('d-none');
  $('.top-line').toggleClass('d-none');
}


$('.burger-menu__checkbox').click(toggleBurgerMenu);

$('.site-sections__link:not(:only-child').click(toggleSubMenuState);
