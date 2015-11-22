'use strict';
const data = require('../data');
const StatCounter = require('../lib/stat-counter');

module.exports = Backbone.View.extend({
  el: '.page-about',
  initialize() {
    this.render();
  },
  render() {
    const callback = (template) => {
      const tech = _.where(data.tech, { featured: true });
      this.$parent.html(template({
        tech: tech,
        stats: data.stats
      }));
      new StatCounter();
    };

    this.load({
      url: this.pages.about,
      callback: callback
    });
  },
});