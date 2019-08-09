$('.sort-block__change-layout-button').click(function() {
  if(!$(this).hasClass('sort-block__change-layout-button_active')) {
    $('.sort-block__change-layout-button').removeClass('sort-block__change-layout-button_active');
    $(this).addClass('sort-block__change-layout-button_active');
  }
});
