var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');


//sass
gulp.task('sass', function() {
    gulp.src('style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style/css'))
});

//css
gulp.task('css', function () {
    return gulp.src('style/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style/css'))
});

// watch
gulp.task("watch", function() {
    gulp.watch("style/*.scss", ["sass"]);
});

// default
gulp.task('default', ['watch', 'css' ]);
