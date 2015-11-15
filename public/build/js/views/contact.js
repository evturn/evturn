'use strict';
const data = require('../data');

module.exports = Backbone.View.extend({
  el: '.page-contact',
  initialize() {
    this.load({
      url: this.pages.contact,
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