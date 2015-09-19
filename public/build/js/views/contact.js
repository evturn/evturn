EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  initialize() {
    this.collection = EVTURN.get('links');
    this.setView();
    this.appendLinks();
  },
  setView() {
    this.$el.html(EVTURN.contactViewTemplate());

    return this;
  },
  appendLinks() {
    let models = this.collection.models;

    for (var i = 0; i < models.length; i++) {
      let model = models[i].toJSON();

      $('.link-items').append(EVTURN.linkItemTemplate(model));
    }

    return this;
  }
});