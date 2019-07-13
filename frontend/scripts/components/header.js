const changeHeaderState = () => {
  $('body').toggleClass('overflow_hidden');
  $('.header-line').toggleClass('header-line_opened');
  $('.header__content').toggleClass('header__content_opened');
  $('.site-sections').toggleClass('site-sections_opened');
  $('.top-line').toggleClass('top-line_opened');
  $('.contacts-burger').toggleClass('contacts-burger_opened');
};

const changeSubMenuState = (event) => {
  event.preventDefault();
  $(event.currentTarget).toggleClass('site-sections__link_opened');
  $(event.currentTarget).closest('.site-sections__list').children('.site-sections__list-item').toggleClass('d-none');
  $(event.currentTarget).parent().toggleClass('d-none');
  $('.top-line').toggleClass('d-none');
}


$('.burger-menu__checkbox').click(changeHeaderState);

$('.site-sections__link:not(:only-child').click(changeSubMenuState);
