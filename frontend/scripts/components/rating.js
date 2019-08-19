$('.rating__star').click(function() {
  if ($(this).closest('.rating').attr('data-disabled')) return;

  $(this).closest('.rating').find('.rating__star').each(function() {
    $(this).removeClass('rating__star_active');
  });

  $(this).addClass('rating__star_active');

  $(this).closest('.rating').attr('data-value', $(this).attr('data-value'));
  $(this).closest('.rating').attr('data-disabled', 'data-disabled');
});
