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
  src: 'frontend/styles/sсss/main.scss',
  dest: 'public/styles',
});

lazyRequireTask('styles:libs', './tasks/styles:libs', {
  src: 'frontend/styles/libraries/*.*',
  dest: 'public/styles/libraries',
});

lazyRequireTask('scripts', './tasks/scripts', {
  src: 'frontend/scripts/components/*.js',
  base: 'frontend',
  dest: 'public/scripts',
});

lazyRequireTask('scripts:libs', './tasks/copy', {
  src: 'frontend/scripts/libraries/*.js',
  dest: 'public/scripts/libraries',
});

lazyRequireTask('svg:min', './tasks/svg:min', {
  src: 'frontend/assets/icons/*.svg',
  dest: 'public/assets/icons',
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

// lazyRequireTask('svg:sprite', './tasks/svg:sprite', {
//   src: 'frontend/assets/icons/sprite/*.svg',
//   dest: 'public/assets/icons/sprite',
//   plugins: [
//     {cleanupAttrs: true},
//     {inlineStyles: true},
//     {removeDoctype: true},
//     {removeXMLProcInst: true},
//     {removeComments: true},
//     {removeMetadata: true},
//     {removeTitle: true},
//     {removeDesc: true},
//     {removeUselessDefs: true},
//     {removeXMLNS: false},
//     {removeEditorsNSData: true},
//     {removeEmptyAttrs: true},
//     {removeHiddenElems: true},
//     {removeEmptyText: true},
//     {emoveEmptyContainers: true},
//     {removeViewBox: false},
//     {cleanupEnableBackground: true},
//     {minifyStyles: false},
//     {convertStyleToAttrs: true},
//     {convertColors: true},
//     {convertPathData: true},
//     {convertTransform: true},
//     {removeUnknownsAndDefaults: true},
//     {removeNonInheritableGroupAttrs: true},
//     {removeUselessStrokeAndFill: true},
//     {removeUnusedNS: true},
//     {cleanupIDs: true},
//     {cleanupNumericValues: true},
//     {cleanupListOfValues: true},
//     {moveElemsAttrsToGroup: true},
//     {moveGroupAttrsToElems: true},
//     {collapseGroups: true},
//     {removeRasterImages: true},
//     {mergePaths: true},
//     {convertShapeToPath: true},
//     {sortAttrs: true},
//     {removeDimensions: true},
//     {removeAttrs: true},
//     {removeElementsByAttr: false},
//     {addClassesToSVGElement: false},
//     {addAttributesToSVGElement: false},
//     {removeStyleElement: false},
//     {removeScriptElement: false},
//   ]
// });

lazyRequireTask('svg:sprite', './tasks/svg:sprite', {
  src: 'frontend/assets/icons/sprite/*.svg',
  dest: 'public/assets/icons/sprite',
  config: {
    shape: {
      transform: [
        {svgo: {
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
        }}
      ],
      mode: {
        stack: {
          sprite: "../sprite.svg"  //sprite file name
        },
        // symbol: true,
        inline: true,
      },
    }
  }
});


lazyRequireTask('images', './tasks/images', {
  src: 'frontend/assets/img/*.*',
  dest: 'public/assets/img',
});

lazyRequireTask('fonts', './tasks/copy', {
  src: 'frontend/assets/fonts/*.*',
  dest: 'public/assets/fonts',
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

gulp.task('assets', gulp.series('svg:min', 'svg:sprite', gulp.parallel('images', 'fonts')));


gulp.task('build', gulp.series(gulp.parallel('scripts:libs', 'scripts', 'pug', 'styles','styles:libs', 'assets')));


gulp.task('watch', function () {
  gulp.watch('frontend/scripts/components/*.js', gulp.series('scripts'));
  gulp.watch('frontend/scripts/libraries/*.js', gulp.series('scripts:libs'));
  gulp.watch('frontend/styles/sсss/**/*.scss', gulp.series('styles'));
  gulp.watch('frontend/styles/libraries/**/*.scss', gulp.series('styles:libs'));
  gulp.watch('frontend/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets', 'pug'));
});



gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));
