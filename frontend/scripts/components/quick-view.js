$('.catalog-item__quick-view').click(() => {
  $.fancybox.open({
    src  : '#quick-view',
    type : 'inline',
    touch: false,
  });

  generateSwipers('item-gallery', itemGallerySwiperConfig)
});
