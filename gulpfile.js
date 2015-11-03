var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    size = require('gulp-size');

gulp.task('rest-img', function() {
    return gulp.src(['images/*.png'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optomizationLevel: 3
        }))
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('home-img', function() {
    return gulp.src(['images/home-*/*.JPG'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optomizationLevel: 3
        }))
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('doit-img', function() {
    return gulp.src(['images/doit/*.png'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optomizationLevel: 3
        }))
        .pipe(gulp.dest('dist/images/doit/'))
});

gulp.task('banner-img', function() {
    return gulp.src(['images/banner/*.JPG', 'images/banner/*.jpeg'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optomizationLevel: 3
        }))
        .pipe(gulp.dest('dist/images/banner/'))
});

gulp.task('services-img', function() {
    return gulp.src('images/services/**/*.JPG')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optomizationLevel: 3
        }))
        .pipe(gulp.dest('dist/images/services/'))
});

gulp.task('images', function () {
    gulp.start('services-img', 'banner-img', 'doit-img');
})

gulp.task('js', function () {
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/optomized/'))
    .pipe(notify( {message: 'Optomize:JS done'}))
})

gulp.task('default', function() {
	gulp.start('home', 'services', 'do-it-yourself', 'contact');
})

gulp.task('home', function() {
  return sass('styles/dev/scss/home.scss', { style: 'expanded' })
    .pipe(gulp.dest('styles/dev/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('styles/prod/'))
    .pipe(notify({ message: 'Styles home task complete' }));
});

gulp.task('services', function() {
  return sass('styles/dev/scss/services.scss', { style: 'expanded' })
    .pipe(gulp.dest('styles/dev/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('styles/prod/'))
    .pipe(notify({ message: 'Styles services task complete' }));
});

gulp.task('do-it-yourself', function() {
  return sass('styles/dev/scss/do-it-yourself.scss', { style: 'expanded' })
    .pipe(gulp.dest('styles/dev/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('styles/prod/'))
    .pipe(notify({ message: 'Styles do-it-yourself task complete' }));
});

gulp.task('contact', function() {
  return sass('styles/dev/scss/contact.scss', { style: 'expanded' })
    .pipe(gulp.dest('styles/dev/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('styles/prod/'))
    .pipe(notify({ message: 'Styles contact task complete' }));
});