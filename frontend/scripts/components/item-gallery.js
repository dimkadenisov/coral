const itemGallerySwiperConfig = {
  slideClass: 'item-gallery__slide',
  slidesPerView: 1,
  spaceBetween: 10,

  allowTouchMove: false,

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
      el: '.item-thumbs',
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
