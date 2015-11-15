'use-strict';
const Handlebars = require('handlebars');
const hbs = require('./templates');
const cachedTemplates = [];

const registerTemplates = () => {
  const get = (url) => {
    $.get(url, (contents) => {
       cachedTemplates[url] = Handlebars.precompile(contents);
    });
  };

  for (let template of hbs.partials) {
    const [url] = _.values(template);
    get(url);
  }
};

const registerPartials = () => {
  const get = (name, url) => {
    $.get(url, (contents) => {
       return Handlebars.registerPartial(name, contents);
    });
  };

  for (let partial of hbs.partials) {
    const [name] = _.keys(partial);
    const [url] = _.values(partial);
    get(name, url);
  }
};

const load = module.exports.load = function(params) {
  const url = params.url;
  const success = params.success;

  if (cachedTemplates[url]) {
    return success(cachedTemplates[url]);
  }

  $.get(url, (contents) => {
    cachedTemplates[url] = Handlebars.compile(contents);
    success(cachedTemplates[url]);
  });
};

const reload = module.exports.reload = function(params) {
  const url = params.url;
  const success = params.success;

  $.get(url, (contents) => {
    success(Handlebars.compile(contents));
  });
};

module.exports.init = (backbone) => {
  registerTemplates();
  registerPartials();

  return _.extend(backbone.View.prototype, {
    $parent: $('.site-content'),
    pages: hbs.pages,
    templates: hbs.templates,
    reload: reload,
    load: load
  });
};