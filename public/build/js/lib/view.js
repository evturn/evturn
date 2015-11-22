'use strict';
const _ = require('underscore');
const Handlebars = require('handlebars');
const paths = require('./templates');

const View = exports = module.exports = {
  cache: [],
  partials: paths.partials,
  templates: paths.templates,
  pages: paths.pages,
  init: function init() {
    this.registerTemplates();
    this.registerPartials();
    return this;
  },
  extend: function extend(obj) {
    const configurations = {
      $parent: $('.site-content'),
      cache: View.cache,
      pages: View.pages,
      templates: View.templates,
      reload: (params) => View.reload.call(View, params),
      load: (params) => View.load.call(View, params)
    };

    _.extend(obj, configurations);
    return obj;
  },
  getTemplates: function getTemplates(url) {
    return $.get(url, (contents) => {
       this.cache[url] = Handlebars.precompile(contents);
    });
  },
  getPartials: function getPartials(name, url) {
    return $.get(url, (contents) => {
       return Handlebars.registerPartial(name, contents);
    });
  },
  registerTemplates: function registerTemplates() {
    for (let template of this.partials) {
      const [url] = _.values(template);
      this.getTemplates(url);
    }
  },
  registerPartials: function registerPartials() {
    for (let partial of this.partials) {
      const [name] = _.keys(partial);
      const [url] = _.values(partial);
      this.getPartials(name, url);
    }
  },
  loadTemplates: function loadTemplates(url, callback) {
    return $.get(url, (contents) => {
      this.cache[url] = Handlebars.compile(contents);
      callback(this.cache[url]);
    });
  },
  loadFromCache: function loadFromCache(url, callback) {
    return $.get(url, (contents) => {
      callback(Handlebars.compile(contents));
    });
  },
  load: function load(params) {
    const url = params.url;
    const callback = params.success;

    if (this.cache[url]) {
      return success(this.cache[url]);
    }

    this.loadTemplates(url, callback);
  },
  reload: function reload(params) {
    const url = params.url;
    const callback = params.success;

    this.loadFromCache(url, callback);
  },
};