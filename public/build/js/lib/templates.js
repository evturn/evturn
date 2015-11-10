'use-strict';
const Handlebars = require('handlebars');

const loadTemplate = module.exports = function(params) {
  if (params.templates[params.filepath]) {
    return params.success(params.templates[params.filepath]);
  }

  const data = params.data ? params.data : '';
  $.get(params.filepath, (contents) => {
    params.templates[params.filepath] = Handlebars.compile(contents);
    params.success(params.templates[params.filepath], data);
  });
};