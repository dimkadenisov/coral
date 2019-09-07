(() => {
  $('[data-fancybox]').parent().each(function(index) {
    const items = $(this).find('[data-fancybox]');

    items.each(function() {
      $(this).attr('data-fancybox', $(this).attr('data-fancybox') + '-' + index);
    })
  });
})()
