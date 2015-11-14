'use-strict';
const Handlebars = require('handlebars');
const templates = [
  {
    filepath: '../../views/templates/header.hbs',
    name: 'header'
  }, {
    filepath: '../../views/templates/thumbnails.hbs',
    name: 'thumbnails'
  }, {
    filepath: '../../views/templates/carousel.hbs',
    name: 'carousel'
  }
];

const cachedTemplates = [];

module.exports.loadTemplate = function(params) {
  const data = params.data ? params.data : '';
  if (cachedTemplates[params.filepath]) {
    return params.success(cachedTemplates[params.filepath], data);
  }

  $.get(params.filepath, (contents) => {
    cachedTemplates[params.filepath] = Handlebars.compile(contents);
    params.success(cachedTemplates[params.filepath], data);
  });
};


module.exports.reloadTemplate = function(params) {
  const data = params.data ? params.data : '';

  $.get(params.filepath, (contents) => {
    params.success(Handlebars.compile(contents), data);
  });
};

module.exports.registerTemplates = () => {
  const get = (template) => {
    $.get(template.filepath, (contents) => {
       cachedTemplates[template.filepath] = Handlebars.precompile(contents);
    });
  };

  for (let template of templates) {
    get(template);
  }
};

module.exports.registerPartials = () => {
  const get = (template) => {
    $.get(template.filepath, (contents) => {
       return Handlebars.registerPartial(template.name, contents);
    });
  };

  for (let template of templates) {
    get(template);
  }
};