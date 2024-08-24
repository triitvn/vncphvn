// Dependencies
const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const gulpBrowserSync = require('browser-sync').create();
const gulpNunjucksRender = require('gulp-nunjucks-render');
const del = require('del');

// Configuration
const pages = 'src/pages';
const templates = 'src/templates';
const css = 'src/styles';
const fonts = 'src/styles/fonts';
const scripts = 'src/scripts';
const output = 'dist';
const cssOutput = 'dist/styles';
const fontsOutput = 'dist/styles/fonts';
const scriptOutput = 'dist/js';

// CSS sass
function sass() {
  return gulp
    .src(css + '/*.+(css|scss)')
    .pipe(gulpSass())
    .pipe(gulp.dest(cssOutput))
    .pipe(gulpBrowserSync.stream());
}

// CSS Fonts
async function copyFonts() {
  return gulp.src(fonts + '/**/*').pipe(gulp.dest(fontsOutput));
}

// TypeScript
function typescript() {
  return gulp
    .src(scripts + '/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'main.js',
      "compilerOptions": {
        // ... other options
        "module": "system" // or "system"
      }
    }))
    .pipe(gulp.dest(scriptOutput))
    .pipe(gulpBrowserSync.stream());
}

// Templates nunjucks
function nunjucks() {
  return gulp
    .src(pages + '/**/*.+(html|njk)')
    .pipe(
      gulpNunjucksRender({
        path: [templates, pages],
        lstripBlocks: true,
        trimBlocks: true,
      })
    )
    .pipe(gulp.dest(output))
    .pipe(gulpBrowserSync.stream());
}

// Watch for CSS changes
function watchCSS() {
  return gulp
    .watch(css, { ignoreInitial: false }, sass)
    .on('change', gulpBrowserSync.reload);
}
// Watch for pages changes
function watchPages() {
  return gulp
    .watch(pages, { ignoreInitial: false }, nunjucks)
    .on('change', gulpBrowserSync.reload);
}
// // Watch for templates changes
function watchTemplates() {
  return gulp
    .watch(templates, { ignoreInitial: false }, nunjucks)
    .on('change', gulpBrowserSync.reload);
}
// Watch for JS changes
function watchScripts() {
  return gulp
    .watch(scripts, { ignoreInitial: false }, typescript)
    .on('change', gulpBrowserSync.reload);
}

// Static Server
function browserSync() {
  gulpBrowserSync.init({
    server: {
      baseDir: output,
    },
    notify: false,
  });
}

// Clean output
function clean() {
  return del([output]);
}

// Export tasks
exports.buildRelease = gulp.series(
  clean,
  gulp.parallel(sass, typescript, copyFonts, nunjucks),
);
exports.build = gulp.series(
  clean,
  gulp.parallel(sass, typescript, copyFonts, nunjucks),
  browserSync
);
exports.watch = gulp.parallel(watchCSS, watchScripts, watchPages, watchTemplates);

// Run
exports.default = gulp.parallel(exports.build, exports.watch);
