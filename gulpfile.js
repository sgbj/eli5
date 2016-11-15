var gulp = require("gulp"),
  bower = require("gulp-bower"),
  nodemon = require("gulp-nodemon");

gulp.task("start", ["bower"], function () {
  return nodemon({
    script: "server.js",
    ext: "js jade json",
    env: { "NODE_ENV": "development", "PORT": 3000 }
  });
});

gulp.task("bower", function() {
  return bower()
    .pipe(gulp.dest("public/lib/"))
});

gulp.task("default", ["bower", "start"]);
