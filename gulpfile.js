//define dependencies
const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

// compile scss referencing the files in the src, once compiled final css will be saved to the specified dest
function compilescss(){
  return src('scss/*.scss')
  .pipe(sass())
  .pipe(prefix())
  .pipe(dest('css'))
}
//watch function
 // identify the files that will be watched by the function and pass the function that should be called when changes are made
function watchTask(){
  watch(['scss/**/*.scss','*.html'], compilescss);
}

//default gulp
// when 'gulp' is entered into the terminal everything listed below will run automatically
exports.default=series(
  compilescss,
  watchTask
);

