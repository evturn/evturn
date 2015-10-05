let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Compiler = require('./templates'),
    Get = require('./data'),
    nav = require('./nav'),
    Rza = require('./views/wrapper');

let Model = Backbone.Model.extend({});
let Collection = Backbone.Collection.extend({
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
    }
    else {
        let featured = _.has(_.first(data), 'featured') ? _.where(data, {featured: true}) : data;

        models = _.has(featured, 'id') ? _.sortBy(featured, 'id') : featured;
    }

    return new Collection(models);
  },
  scrollUp() {
    $('html, body').animate({scrollTop: 0 }, 500);

  },
  preloader() {
    $(window).load(function() {
      let $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });
  }
});