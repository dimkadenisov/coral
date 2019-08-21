$('.catalog-item__quick-view').click(() => {
  $.fancybox.open({
    src  : '#quick-view',
    type : 'inline',
    touch: false,
  });

  const quickViewSwiperConfig = {
    slideClass: 'item-gallery__slide',
    slidesPerView: 1,
    spaceBetween: 10,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '.pagination',
      bulletElement: 'div',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item_active',
    },

    thumbs: {
      swiper: {
        el: '.quick-view__thumbs',
        slideClass: 'item-gallery__slide',
        slidesPerView: 3,
        spaceBetween: 15,

        allowTouchMove: false,

        navigation: {
          prevEl: '.prev',
          nextEl: '.next',
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      }
    },
  };

  let quickViewSwiperSwiper = $('.quick-view__swiper') ?
    new Swiper('.quick-view__swiper', quickViewSwiperConfig)
    : false;

  $('.quick-view__thumbs').on('mouseenter','.item-gallery__slide', function() {
    quickViewSwiperSwiper.slideTo($(this).index(), 0, false);
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
