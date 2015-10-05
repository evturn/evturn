let Compiler = require('../templates');

module.exports = Backbone.View.extend({
  navbarTemplate      : Compiler.navbar(),
  contactViewTemplate : Compiler.contactView(),
  linkItemTemplate    : Compiler.linkItem(),
  el: '.contact',
  initialize() {
    this.setView();
    this.appendLinks();
  },
  setView() {
    this.$el.html(this.navbarTemplate());
    this.$el.append(this.contactViewTemplate());
    return this;
  },
  appendLinks() {
    let collection = this.get('links'),
        models = collection.models;

    this.compileAndAppend($('.link-items'), models, this.linkItemTemplate);
    return this;
  }
});