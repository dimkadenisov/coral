$('.item-card .button_heart').click(function() {
  if($(this).hasClass('button_heart_clicked')) {
    $(this).find('.button__text').text('В избранном');
  } else {
    $(this).find('.button__text').text('В избранное');
  }
});

$('.item-card .buy-button').click(function() {
  ($(this).hasClass('buy-button_clicked'))
    ? $(this).find('.button__text').text('Удалить из\u00A0корзины')
    : $(this).find('.button__text').text('В корзину')
});

const productSwiperConfig = {
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
      el: '.product__thumbs',
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

let productSwiper = $('.product__swiper').length ?
  new Swiper('.product__swiper', productSwiperConfig)
  : false;

$('.product__thumbs').on('mouseenter','.item-gallery__slide', function() {
  productSwiper.slideTo($(this).index(), 0, false);
});
