const gulp = require('gulp')
const prefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const rename = require('gulp-rename')


gulp.task('sass-default', function(cb) {

	return gulp.src('./customier.sass')
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(prefixer({
			overrideBrowserslist: ['last 4 versions']
		}))
		.pipe(gulp.dest('./'))

})

gulp.task('sass-mini', function(cb) {

	return gulp.src('./customier.sass')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(prefixer({
			overrideBrowserslist: ['last 4 versions']
		}))
		.pipe(rename('customier.min.css'))
		.pipe(gulp.dest('./'))

})
