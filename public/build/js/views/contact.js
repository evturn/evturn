'use strict';
const data = require('../data');

module.exports = Backbone.View.extend({
  el: '.page-contact',
  initialize() {
    this.render();
  },
  render() {
    const callback = (template) => {
      const links = data.links;
      this.$parent.html(template({ links }));
    };

    this.load({
      url: this.pages.contact,
      callback: callback
    });
  }
});