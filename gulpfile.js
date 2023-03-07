const { src, dest, watch, series } = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const rename = require("gulp-rename");

// ==> Project Specific Config
const baseDir = `./src/santhalimusic`;
console.log(baseDir);


// tailwind task
function tailwindTask() {
	if(process.env.NODE_ENV == "production") {
		processors = [tailwindcss(`${baseDir}/css/tailwind.config.js`), autoprefixer, cssnano];
	} else {
		processors = [tailwindcss(`${baseDir}/css/tailwind.config.js`)];
	}

  return src(baseDir + "/css/index.css")
    .pipe(postcss(processors))
    .pipe(rename("style.css"))
    .pipe(dest(baseDir + "/css/"));
}

// Js Task
function jsTask() {
	return src(baseDir + "/js/index.js", {sourcemaps: false})
		.pipe(terser())
		.pipe(rename("main.js"))
		.pipe(dest(baseDir + "/js/", {sourcemaps: "."}));
}

// browsersync task
function bsServe(cb) {
	browsersync.init({
		server: {
			baseDir,
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
	const htmlFiles = baseDir + "/*.html";
	const cssFiles = baseDir + "/css/index.css";
	const jsFiles = baseDir + "/js/index.js";
	watch([htmlFiles, cssFiles], series(tailwindTask, bsReload));
	watch([jsFiles], series(jsTask, tailwindTask, bsReload));
}

exports.default = series(
  tailwindTask,
  jsTask,
	bsServe,
	watchTask
);