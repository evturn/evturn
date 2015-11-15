'use strict';
const data = require('../data');
const statCounter = require('../lib/stat-counter');
const engine = require('../lib/view-engine');
const hbs = require('../lib/templates');

module.exports = Backbone.View.extend({
  el: '.page-about',
  initialize() {
    engine.load({
     url: hbs.about.page,
      success: this.render
    });
  },
  render(template) {
    const $siteContent = $('.site-content');
    const tech = _.where(data.tech, { featured: true });
    $siteContent.html(template({
      tech: tech,
      stats: data.stats
    }));
    statCounter();
    return this;
  },
});