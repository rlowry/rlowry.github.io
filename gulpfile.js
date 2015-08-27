var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
  .pipe(gulp.dest('./css'));
  gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
  .pipe(gulp.dest('./js'));
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./js'));
});