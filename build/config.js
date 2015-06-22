var js = require('./paths').js;
var css = require('./paths').css;
var scss = require('./paths').scss;

module.exports = {
  js: {
    build: js.build,
    vendor: js.vendor,
    vdb: js.vdb,
    dest: js.dest
  },
  css: {
    build: css.build,
    vendor: css.vendor,
    dest: css.dest
  },
  scss: {
    build: scss.build,
    dest: scss.dest
  }
};