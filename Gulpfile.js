var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var less = require("gulp-less");
var watch = require('gulp-watch');

gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.less', {ignoreInitial: false})
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});

gulp.task('less', function () {
    gulp.src("*.less")
        .pipe(less())
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['less']);