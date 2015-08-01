EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',

  viewContainer: _.template($('#links-container-template').html()),
  itemContainer: _.template($('#link-item-template').html()),

  initialize: function() {
    this.collection = this.get('links');
    this.render();
  },

  render: function() {
    this.setView(this.$el, this.viewContainer);
    this.appendModels('.link-items', this.collection, this.itemContainer);
  },

});