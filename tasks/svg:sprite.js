'use strict'

const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const svgSprite = require('gulp-svg-sprite');

module.exports = (options) => {
  return () => {
    return combiner(
      gulp.src(options.src), // svg files for sprite
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg"  //sprite file name
          },
          // symbol: true,
          inline: true,
        },
      }),
      gulp.dest(options.dest)
    )
  }
};
