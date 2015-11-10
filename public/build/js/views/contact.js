'use strict';
const links = require('../models/links');
const engine = require('../lib/view-engine');
const loadTemplate = engine.loadTemplate;

module.exports = Backbone.View.extend({
  el: '.contact',
  filepath: '../../views/contact.hbs',
  initialize() {
    loadTemplate({
      filepath: this.filepath,
      success: this.render
    });
  },
  render(template) {
    $('.contact').html(template({ links }));
    return this;
  }
});