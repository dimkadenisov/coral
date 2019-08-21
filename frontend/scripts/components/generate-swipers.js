function generateSwipers({
  swiperClass = false,
  swiperConfig = false,
  thumbsClass = false,
  thumbsConfig = false
}) {
  if (!$('.' + swiperClass).length) return false;


  let thumbs = ($('.' + thumbsClass).length && thumbsConfig)
    ? generateSwipers({swiperClass: thumbsClass, swiperConfig: thumbsConfig})
    : false;

  const itemsSwipersNodes = $('.' + swiperClass);
  let swipers = [];

  itemsSwipersNodes.each(function(index) {
    $(this).addClass(swiperClass + '-' + index);

    if (thumbs) swiperConfig.thumbs.swiper = thumbs[index];

    swipers[index] = new Swiper('.' + swiperClass + '-' + index, swiperConfig);
    swipers[index].id = index;
  });

  return swipers;
};
