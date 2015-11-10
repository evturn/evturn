'use strict';
const _ = require('underscore');
const loadTemplate = require('../lib/templates');
const data = require('../models');
const statCounter = require('../lib/stat-counter');

module.exports = Backbone.View.extend({
  templates: [],
  el: '.about',
  filepath: '../../views/about.hbs',
  initialize() {
    loadTemplate({
      templates: this.templates,
      filepath: this.filepath,
      success: this.render
    });
  },
  render(template) {
    const tech = _.where(data.tech, { featured: true });
    $('.about').html(template({
      tech: tech,
      stats: data.stats
    }));
    statCounter();
    return this;
  },
});