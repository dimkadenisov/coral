$('.item-card .button_heart').click(function() {
  if($(this).hasClass('button_heart_clicked')) {
    $(this).find('.button__text').text('В избранном');
  } else {
    $(this).find('.button__text').text('В избранное');
  }
});

$('.item-card .buy-button').click(function() {
  ($(this).hasClass('buy-button_clicked'))
    ? $(this).find('.button__text').text('Удалить из\u00A0корзины')
    : $(this).find('.button__text').text('В корзину')
});
