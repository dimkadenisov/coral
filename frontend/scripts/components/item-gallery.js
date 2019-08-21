const itemGallerySwiperConfig = {
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
      el: '.item-gallery__thumbs',
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

let itemGallerySwiper = generateSwipers({
  swiperClass: 'item-gallery__swiper',
  swiperConfig: itemGallerySwiperConfig});

$('.item-gallery__thumbs').on('mouseenter','.item-gallery__slide', function() {
  itemGallerySwiper.slideTo($(this).index(), 0, false);
});
