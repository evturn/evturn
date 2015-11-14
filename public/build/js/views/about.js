'use strict';
const data = require('../data');
const statCounter = require('../lib/stat-counter');
const engine = require('../lib/view-engine');
const loadTemplate = engine.loadTemplate;

module.exports = Backbone.View.extend({
  el: '.about',
  filepath: '../../views/about.hbs',
  initialize() {
    loadTemplate({
      filepath: this.filepath,
      success: this.render
    });
  },
  render(template) {
    const tech = _.where(data.tech, { featured: true });
    $('.site-content').html(template({
      tech: tech,
      stats: data.stats
    }));
    statCounter();
    return this;
  },
});