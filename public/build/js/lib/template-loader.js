'use-strict';
const $ = require('jquery');
const Handlebars = require('handlebars');

const loadTemplate = module.exports = function(params) {
  if (params.templates[params.filepath]) {
    return params.success(params.templates[params.filepath]);
  }

  $.get(params.filepath, (contents) => {
    params.templates[params.filepath] = Handlebars.compile(contents);
    params.success(params.templates[params.filepath]);
  });
};