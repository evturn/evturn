var ev = ev || {};

ev.AboutView = Backbone.View.extend({
  el: '.about',
  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  initialize: function() {
    this.collection = ev.tech();
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    ev.appendModels('technology-items', this.collection, this.itemContainer);
    statCount();
    return this;
  },

});