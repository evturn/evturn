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
    let selector = this.$el;
    let template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendLinks() {
    let selector = '.link-items';
    let collection = this.collection;
    let template = this.itemContainer;

    this.appendModels(selector, collection, template);

    return this;
  }

});