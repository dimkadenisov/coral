$('.catalog-item__quick-view').click(() => {
  $.fancybox.open({
    src  : '#quick-view',
    type : 'inline',
    touch: false,
  });

  generateSwipers({
    swiperClass: 'item-gallery__swiper',
    swiperConfig: itemGallerySwiperConfig
  });
});

(function() {
  let timer;

  window.onresize = () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      if($(window).width() < 992) $.fancybox.close(true);
    }, 100);
  }
})();
