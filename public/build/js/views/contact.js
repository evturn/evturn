EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  initialize() {
    this.setView();
    this.appendLinks();
  },
  setView() {
    this.$el.html(EVTURN.contactViewTemplate());

    return this;
  },
  appendLinks() {
    let collection = EVTURN.get('links');

    for (var i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $('.link-items').append(EVTURN.linkItemTemplate(model));
    }

    return this;
  }
});