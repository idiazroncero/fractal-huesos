'use strict';

const gulp              = require('gulp');
const sass              = require('gulp-sass');
const sourcemaps        = require('gulp-sourcemaps');
const autoprefixer      = require('gulp-autoprefixer');
const sassGlob          = require('gulp-sass-glob');
const stylelint         = require('gulp-stylelint');
const del               = require('del');

gulp.task('css', function() {
    return gulp.src('./assets/scss/huesos.scss')
      .pipe(sassGlob())
      .pipe(sass({
          includePaths: 'node_modules'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 5 versions']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./assets/'));
  });

  // TEMPORARY TASK FOR TESTING THEME
  gulp.task('css2', function() {
    return gulp.src('./assets/scss/huesos.scss')
      .pipe(sassGlob())
      .pipe(sass({
          includePaths: 'node_modules'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 5 versions']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('../../dist/'));
  });

gulp.task('css:clean', function() {
    return del(['./assets/huesos.css']);
});

gulp.task('css:watch', function () {
    gulp.watch('./assets/scss/**/*.scss', ['css2']);
});

gulp.task('default', ['css']);
