'use strict';
const data = require('../data');
const statCounter = require('../lib/stat-counter');

module.exports = Backbone.View.extend({
  el: '.page-about',
  initialize() {
    this.load({
     url: this.pages.about,
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