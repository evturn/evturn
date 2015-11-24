'use strict';
const data = require('../data');

module.exports = Backbone.View.extend({
  el: '.page-contact',
  initialize() {
    this.render();
  },
  render() {
    this.load(this.pages.contact)
      .then((template) => {
        const links = data.links;
        this.$parent.html(template({ links }));
      });
  },
});