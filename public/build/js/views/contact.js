const links = require('../models/links');
const Handlebars = require('handlebars');

module.exports = Backbone.View.extend({
  templates: [],
  el: '.contact',
  filepath: '../../views/contact.hbs',
  initialize() {
    this.loadTemplate();
  },
  loadTemplate() {
    if (this.templates[this.filepath]) {
      return this.render(this.templates[this.filepath]);
    }

    $.get(this.filepath, (contents) => {
      this.templates[this.filepath] = Handlebars.compile(contents);
      this.render(this.templates[this.filepath]);
    });
  },
  render(template) {
    this.$el.html(template({ links }));
    return this;
  }
});