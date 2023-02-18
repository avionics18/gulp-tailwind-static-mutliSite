# gulp-tailwind-static-mutliSite

### New Project Requirements
1. Create a project folder e.g.: `src/project1`
2. Create `src/project1/css/index.css`, `src/project1/css/tailwind.config.js` and `src/project1/js/index.js`
	2.1 In `css/tailwind.config.js`, don't forget to change the `content` field which contains the absolute path w.r.t project root of the files which tailwind need to purge.
3. Create html files inside `src/project1/`, e.g: `src/project1/index.html`, `index.html` is mandatory.
4. Update the `baseDir` variable to the name of your project folder in gulpfile.js

**Output Files**
`src/project1/css/style.css` and `src/project1/js/main.js`