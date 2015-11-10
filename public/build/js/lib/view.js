'use strict';
const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Compiler = require('../templates');
const models = require('../models');
const nav = require('./nav');
const views = require('../views');
const Model = Backbone.Model.extend({});
const Collection = Backbone.Collection.extend({
  model: Model
});

module.exports = _.extend(Backbone.View.prototype, {
  init() {
    nav();
  },
  get(value, options=false, pure=false) {
    let data, _models;

    switch (value) {
      case 'links':
        data = models.links;
        break;
      case 'stats':
        data = models.stats;
        break;
      case 'tech':
        data = models.tech;
        break;
      case 'projects':
        data = models.projects;
        break;
    };

    if (options) {
      _models = _.has(data, 'id') ? _.sortBy(data, 'id') : data;
    } else {
      let featured = _.has(_.first(data), 'featured') ? _.where(data, {featured: true}) : data;
      _models = _.has(featured, 'id') ? _.sortBy(featured, 'id') : featured;
    }

    if (pure) {
      return _models;
    }
    return new Collection(_models);
  },
  // passing `false` prevents`.toJSON()` from being called on iteratee
  compileAndAppend($element, models, template, json=true) {
    for (let m of models) {
      let model = json ? m.toJSON() : m;
      $element.append(template(model));
    }
  },
  changeState(string) {
    let $selector = $(document.getElementsByClassName(string));
    let element = document.createElement('div');
    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new views.Wrapper().$el);
  },
});