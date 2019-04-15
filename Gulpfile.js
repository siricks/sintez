let gulp = require("gulp"),
	svgSprite = require("gulp-svg-sprite"),
	path = {
		icons_source: './source/icons/*.svg',
		icons_output: './source/components/svg'
	};

let spriteConfig = {
	svg: {
		transform: [
			function (svg) {
				return svg
					.replace(/(<style.*?<\/style>)/g, "")
					.replace(/(fill=\"#([0-9a-f]{6})\")/g, "");
			}
		]
	},
	mode: {
		css: false,
		symbol: {
			dest: ".",
			sprite: "sprite.symbol.svg"
		}
	}
};

gulp.task("svgsprite", function () {
	return gulp
		.src(path.icons_source, {
			cwd: ""
		})
		.pipe(svgSprite(spriteConfig))
		.pipe(gulp.dest(path.icons_output));
});
