'use-strict';
const Handlebars = require('handlebars');
const hbs = require('./templates');
const templates = [
  {
    filepath: '../../views/templates/header.hbs',
    name: 'header'
  }, {
    filepath: '../../views/templates/thumbnails.hbs',
    name: 'thumbnails'
  }, {
    filepath: '../../views/templates/project.hbs',
    name: 'project'
  }
];

const cachedTemplates = [];

module.exports.load = function(params) {
  if (cachedTemplates[params.filepath]) {
    return params.success(cachedTemplates[params.filepath]);
  }

  $.get(params.filepath, (contents) => {
    cachedTemplates[params.filepath] = Handlebars.compile(contents);
    params.success(cachedTemplates[params.filepath]);
  });
};

module.exports.reload = function(params) {
  $.get(params.filepath, (contents) => {
    params.success(Handlebars.compile(contents));
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
  const get = (name, url) => {
    $.get(url, (contents) => {
       return Handlebars.registerPartial(name, contents);
    });
  };

  for (let partial of hbs.partials) {
    const name = _.keys(partial)[0];
    const url = _.values(partial)[0];
    get(name, url);
  }
};