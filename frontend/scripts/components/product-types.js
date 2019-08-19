$('.product-types .button').click(function() {
  $(this).closest('.product-types').find('.product-types__list').addClass('product-types__list_opened')
  $(this).addClass('d-none');
});
