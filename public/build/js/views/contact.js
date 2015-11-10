'use strict';
const links = require('../models/links');
const engine = require('../lib/view-engine');
const loadTemplate = engine.loadTemplate;

module.exports = Backbone.View.extend({
  templates: [],
  el: '.contact',
  filepath: '../../views/contact.hbs',
  initialize() {
    loadTemplate({
      templates: this.templates,
      filepath: this.filepath,
      success: this.render
    });
  },
  render(template) {
    $('.contact').html(template({ links }));
    return this;
  }
});