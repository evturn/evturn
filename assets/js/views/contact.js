EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  viewContainer : _.template($('#links-container-template').html()),
  itemContainer : _.template($('#link-item-template').html()),

  initialize() {
    this.collection = this.get('links');

    this.render();
    this.appendLinks();
  },

  render() {
    let selector = this.$el,
        template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendLinks() {
    let selector = '.link-items',
        collection = this.collection,
        template = this.itemContainer;

    this.appendModels(selector, collection, template);

    return this;
  }

});