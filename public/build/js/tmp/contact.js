'use strict';

var EVTURN = require('./evturn-view'),
    Compiler = require('./evturn-templates');

module.exports = Backbone.View.extend({
  navbarTemplate: Compiler.navbarCompiler(),
  contactViewTemplate: Compiler.contactViewCompiler(),
  linkItemTemplate: Compiler.linkItemCompiler(),
  el: '.contact',
  initialize: function initialize() {
    this.setView();
    this.appendLinks();
  },
  setView: function setView() {
    this.$el.html(this.navbarTemplate());
    this.$el.append(this.contactViewTemplate());

    return this;
  },
  appendLinks: function appendLinks() {
    var collection = EVTURN.get('links');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.link-items').append(this.linkItemTemplate(model));
    }

    return this;
  }
});