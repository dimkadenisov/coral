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

const catalogItemSwipers = generateSwipers('catalog-item__swiper', catalogItemSwiperConfig);

$('.catalog-item__swiper').on('mouseenter', function() {

  const idClass = this.className.split(/\s+/).find((item) => item.match(/catalog-item__swiper-\d*$/));
  const id = idClass.match(/\d*$/)[0];

  catalogItemSwipers[id].params.autoplay.delay = 1000;
  catalogItemSwipers[id].autoplay.start();

});

$('.catalog-item__swiper').on('mouseleave', function() {

  const idClass = this.className.split(/\s+/).find((item) => item.match(/catalog-item__swiper-\d*$/));
  const id = idClass.match(/\d*$/)[0];

  catalogItemSwipers[id].autoplay.stop();
});
