'use strict';
const links = require('../models/links');
const loadTemplate = require('../lib/template-loader');

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