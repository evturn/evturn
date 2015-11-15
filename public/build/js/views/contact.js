'use strict';
const data = require('../data');
const hbs = require('../lib/templates');

module.exports = Backbone.View.extend({
  el: '.page-contact',
  initialize() {
    this.load({
      url: hbs.contact.page,
      success: this.render
    });
  },
  render(template) {
    const $siteContent = $('.site-content');
    const links = data.links;
    $siteContent.html(template({ links }));
    return this;
  }
});