'use strict';

EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  initialize: function initialize() {
    this.setView();
    this.appendLinks();
  },
  setView: function setView() {
    this.$el.html(EVTURN.navbarTemplate());
    this.$el.append(EVTURN.contactViewTemplate());

    return this;
  },
  appendLinks: function appendLinks() {
    var collection = EVTURN.get('links');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.link-items').append(EVTURN.linkItemTemplate(model));
    }

    return this;
  }
});