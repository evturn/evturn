'use strict';
const data = require('../data');
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
    const links = data.links;
    $('.site-content').html(template({ links }));
    return this;
  }
});