var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('default', function () {
  gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./css'));
  gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./js'));
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./js'));
  gulp.src(['img/**/*.png','img/**/*.jpg','img/**/*.gif','img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('img'));
});