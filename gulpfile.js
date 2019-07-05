'use strict'

const gulp = require('gulp');
// const $ = require('gulp-load-plugins')();
// const del = require('del');
// const browserSync = require('browser-sync').create();
// const resolveUrl = require('gulp-resolve-url');
// const prettify = require('gulp-jsbeautifier');
// const combiner = require('stream-combiner2').obj;
// const svgSprite = require('gulp-svg-sprite');


//--------------
//--------------
//--------------
//--------------

function lazyRequireTask(taskName, path, options = {}) {
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);
    return task(callback);
  });
};

//--------------
//--------------
//--------------
//--------------

lazyRequireTask('pug', './tasks/pug', {
  src: 'frontend/pug/pages/*.pug',
  dest: 'public',
});

lazyRequireTask('styles', './tasks/styles', {
  src: 'frontend/styles/*.scss',
  dest: 'public/styles',
});

lazyRequireTask('scripts', './tasks/scripts', {
  src: 'frontend/scripts/components/*.js',
  base: 'frontend',
  dest: 'public/scripts',
});

lazyRequireTask('svg:sprite', './tasks/svg:sprite', {
  src: 'frontend/assets/img/icons-minificated/*.svg',
  dest: 'public/assets/img/icons',
});

lazyRequireTask('svg:min', './tasks/svg:min', {
  src: 'frontend/assets/img/icons/*.svg',
  dest: 'frontend/assets/img/icons-minificated',
  plugins: [
    {cleanupAttrs: true},
    {inlineStyles: true},
    {removeDoctype: true},
    {removeXMLProcInst: true},
    {removeComments: true},
    {removeMetadata: true},
    {removeTitle: true},
    {removeDesc: true},
    {removeUselessDefs: true},
    {removeXMLNS: false},
    {removeEditorsNSData: true},
    {removeEmptyAttrs: true},
    {removeHiddenElems: true},
    {removeEmptyText: true},
    {emoveEmptyContainers: true},
    {removeViewBox: false},
    {cleanupEnableBackground: true},
    {minifyStyles: false},
    {convertStyleToAttrs: true},
    {convertColors: true},
    {convertPathData: true},
    {convertTransform: true},
    {removeUnknownsAndDefaults: true},
    {removeNonInheritableGroupAttrs: true},
    {removeUselessStrokeAndFill: true},
    {removeUnusedNS: true},
    {cleanupIDs: true},
    {cleanupNumericValues: true},
    {cleanupListOfValues: true},
    {moveElemsAttrsToGroup: true},
    {moveGroupAttrsToElems: true},
    {collapseGroups: true},
    {removeRasterImages: true},
    {mergePaths: true},
    {convertShapeToPath: true},
    {sortAttrs: true},
    {removeDimensions: true},
    {removeAttrs: true},
    {removeElementsByAttr: false},
    {addClassesToSVGElement: false},
    {addAttributesToSVGElement: false},
    {removeStyleElement: false},
    {removeScriptElement: false},
  ]
});

lazyRequireTask('images', './tasks/images', {
  src: 'frontend/assets/img/.*',
  dest: 'public/assets/img',
});

lazyRequireTask('clean', './tasks/clean', {
  src: ['public', 'frontend/assets/img/icons-minificated'],
});

lazyRequireTask('server', './tasks/server', {
  baseDir: 'public',
  watchDir: 'public/**/*.*'
});

//--------------
//--------------
//--------------
//--------------

gulp.task('assets',
  gulp.series('svg:min', 'svg:sprite'),
  gulp.parallel('images')
);


gulp.task('build', gulp.series(gulp.parallel('scripts', 'pug', 'styles', 'assets'))
);


gulp.task('watch', function () {
  gulp.watch('frontend/scripts/**/*.js', gulp.series('scripts'));
  gulp.watch('frontend/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('frontend/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets', 'pug'));
});



gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));
