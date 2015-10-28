const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Compiler = require('./templates');
const Get = require('./data');
const nav = require('./nav');
const views = require('./views');
const Model = Backbone.Model.extend({});
const Collection = Backbone.Collection.extend({
  model: Model
});

module.exports = _.extend(Backbone.View.prototype, {
  init() {
    this.preloader();
    nav();
  },
  get(value, options=false) {
    let data, models;

    switch (value) {
      case 'links':
        data = Get.links();
        break;
      case 'stats':
        data = Get.stats();
        break;
      case 'tech':
        data = Get.tech();
        break;
      case 'apps':
        data = Get.apps();
        break;
      case 'bio':
        data = Get.bio();
        break;
    };

    if (options) {
      models = _.has(data, 'id') ? _.sortBy(data, 'id') : data;
    } else {
      let featured = _.has(_.first(data), 'featured') ? _.where(data, {featured: true}) : data;
      models = _.has(featured, 'id') ? _.sortBy(featured, 'id') : featured;
    }
    return new Collection(models);
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
  scrollUp() {
    let $webpage = $('html, body');
    $webpage.animate({scrollTop: 0 }, 500);
  },
  preloader() {
    $(window).load(() => {
      let $container = $('#preloader');
      let $image = $('.preloader');
      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });
  }
});