const generateSwipers = function(swiperClass, swiperConfig) {
  if (!$('.' + swiperClass).length) return false;

  const itemsSwipersNodes = $('.' + swiperClass);
  let swipers = {};

  itemsSwipersNodes.each(function(index) {
    $(this).addClass(swiperClass + '-' + index);

    swipers[index] = new Swiper('.' + swiperClass + '-' + index, swiperConfig)
  });

  return swipers;
};
