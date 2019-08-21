function getSwiperIndex(swiperBaseClass) {
  const regexp = new RegExp(swiperBaseClass + '-' + '\\d*$');

  const indexClass = $.grep(this.querySelector('.' + swiperBaseClass).className.split(/\s+/), item => item.match(regexp));

  const index = indexClass[0].match(/\d*$/)[0];

  return index;
};
