$('.item-card .button_heart').click(function() {
  if($(this).hasClass('button_heart_clicked')) {
    $(this).find('.button__text').text('В избранном');
  } else {
    $(this).find('.button__text').text('В избранное');
  }
});

$('.item-card__show-more-button').click(function() {
  const characteristicksTable = $(this).closest('.item-card').find('.item-characteristics');
  if (characteristicksTable.hasClass('item-characteristics_opened')) {
    $(this).text('Больше характеристик');
    $(this).removeClass('button_gray');
    characteristicksTable.removeClass('item-characteristics_opened');
  } else {
    $(this).text('Меньше характеристик');
    $(this).addClass('button_gray');
    characteristicksTable.addClass('item-characteristics_opened');
  }
})

$('.item-card .buy-button').click(function() {
  ($(this).hasClass('buy-button_clicked'))
    ? $(this).find('.button__text').text('Удалить из\u00A0корзины')
    : $(this).find('.button__text').text('В корзину')
});
