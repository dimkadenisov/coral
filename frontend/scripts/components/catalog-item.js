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

// $('.buy-button').click(function() {
//   $(this).toggleClass('button_red');
//   $(this).toggleClass('button_gray');
//   $(this).toggleClass('buy-button_clicked');
// });

function generateCatalogItemSwipers() {
  const catalogItemSwiperConfig = {
    slideClass: 'catalog-item__slide',
    slidesPerView: 1,
    spaceBetween: 10,

    effect: 'fade',
    runCallbacksOnInit: false,

    allowTouchMove: true,

    observer: true,
    observerParents: true,
    observeSlideChildren: true,
  };

  let catalogItemSwipers = generateSwipers({
    swiperClass: 'catalog-item__swiper',
    swiperConfig: catalogItemSwiperConfig
  });

  $('.catalog-item').on('mouseenter', function() {
    const index = getSwiperIndex.call(this, 'catalog-item__swiper');

    catalogItemSwipers[index].slideNext();
    catalogItemSwipers[index].params.autoplay.delay = 1300;
    catalogItemSwipers[index].params.autoplay.waitForTransition = false;
    catalogItemSwipers[index].autoplay.start();
  });

  $('.catalog-item').on('mouseleave', function() {
    const idClass = $.grep(this.querySelector('.catalog-item__swiper').className.split(/\s+/), item => item.match(/catalog-item__swiper-\d*$/));

    const id = idClass[0].match(/\d*$/)[0];
    catalogItemSwipers[id].slideTo(0);
    catalogItemSwipers[id].autoplay.stop();
  });

  return catalogItemSwipers;
};
