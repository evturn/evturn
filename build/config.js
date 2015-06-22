var js = require('./paths').js;
var css = require('./paths').css;

module.exports = {
  js: {
    build: js.build,
    vendor: js.vendor,
    vdb: js.vdb
  },
  css: {
    build: css.build,
    vendor: css.vendor
  }
};