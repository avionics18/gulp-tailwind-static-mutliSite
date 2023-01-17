const { src, dest, watch, series } = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// tailwind task
function tailwindTask() {
	const processors = [tailwindcss, autoprefixer, cssnano];

  return src("src/css/style.css")
    .pipe(postcss(processors))
    .pipe(dest("dist/css"));
}

// Js Task
function jsTask() {
	return src("src/js/script.js", {sourcemaps: true})
		.pipe(terser())
		.pipe(dest("dist/js", {sourcemaps: "."}));
}

// browsersync task
function bsServe(cb) {
	browsersync.init({
		server: {
			baseDir: "."
		}
	});

	cb();
}
function bsReload(cb) {
	browsersync.reload();
	cb();
}


// Gulp Workflow
function watchTask() {
	watch(["*.html", "src/css/style.css"], series(tailwindTask, bsReload));
	watch(["src/js/script.js"], series(jsTask, tailwindTask, bsReload));
}

exports.default = series(
  tailwindTask,
  jsTask,
	bsServe,
	watchTask
);