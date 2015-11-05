/**
 * Created by Wayne on 04/11/2015.
 */
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
      replaceString: /\bgulp[\-.]/
    });

gulp.task('less', function () {
  return gulp.src('styles/*.less')
    .pipe(plugins.less())
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('styles/'));
});

gulp.task('libs', function () {
  var bowerFiles = plugins.mainBowerFiles('**/*.js');
  return gulp.src(bowerFiles)
    .pipe(plugins.filter('*.js'))
    .pipe(gulp.dest('libs/'));
});

gulp.task('default', ['less', 'libs']);