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
    const url = _.values(template)[0];
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
    const name = _.keys(partial)[0];
    const url = _.values(partial)[0];
    get(name, url);
  }
};

module.exports.load = function(params) {
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

module.exports.reload = function(params) {
  const url = params.url;
  const success = params.success;

  $.get(url, (contents) => {
    success(Handlebars.compile(contents));
  });
};

module.exports.init = () => {
  registerTemplates();
  registerPartials();
};