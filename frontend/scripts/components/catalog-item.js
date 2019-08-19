$('.button_heart').click(function() {
  $(this).toggleClass('button_heart_clicked');
  if ($(this).hasClass('button_heart_clicked')) {
    $(this).attr('data-description', 'Удалить товар из избранного');
    $(this).css({'display':'flex'});
  } else {
    $(this).attr('data-description', 'Добавить товар в избранное');
    $(this).removeAttr('style');
  }
});

$('.buy-button').click(function() {
  $(this).toggleClass('button_red');
  $(this).toggleClass('button_gray');
  $(this).toggleClass('buy-button_clicked');
});
