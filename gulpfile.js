const gulp = require('gulp');

// browser sync
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// webpack
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
// const webpack = require('gulp-webpack');
const eslint = require('gulp-eslint');

// error
const notify  = require('gulp-notify');
const plumber = require('gulp-plumber');

// data
const changed  = require('gulp-changed');

gulp.task('watch', () => {
  gulp.watch(['/*.js', '/js/*'], ['build']);
  gulp.watch(['./dist/*.html'], ['reload']); // static html watch(not pug)
});


gulp.task('reload', function() {
  gulp.src(['dist/*.html'])
  .pipe(changed('build'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('webpack', () => {
  // console.log('task/webpack')
  webpackConfig.watch = true;
  return webpackStream(webpackConfig, webpack)
    .on('error', function handleError() {　// watch中のエラーで死なないようにする。
      console.log('webpack error')
      this.emit('end');
    })
    .pipe(gulp.dest('./dist'));
});

// gulp.task('build', function() {
//   return gulp.src('./js/*.js')
//     .pipe(plumber({
//       errorHandler: notify.onError("Error: <%= error.message %>")
//     }))
//     .pipe(eslint({useEslintrc: true}))
//     .pipe(eslint.format())
//     .pipe(eslint.failOnError())
//     .pipe(webpack(webpackConfig))
//     .pipe(gulp.dest('./'));
// });

// BrowserSync
gulp.task('browser-sync', function() {
  console.log("task sync =========")
  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['./dist/']
    },
    // startPath: '01.html',
    open: false
  });

});
gulp.task('default', ['webpack', 'watch', 'browser-sync']);
// gulp.task('default', ['watch', 'browser-sync']);
