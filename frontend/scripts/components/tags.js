$('.show-more-button').click(function() {
  if ($(this).closest('.tags').hasClass('tags_show-all')) {
    $(this).text('Показать еще');
  } else {
    $(this).text('Скрыть');
  }

  $(this).closest('.tags').toggleClass('tags_show-all');
});
