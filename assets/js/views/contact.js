EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',

  viewContainer: _.template($('#links-container-template').html()),
  itemContainer: _.template($('#link-item-template').html()),

  initialize: function() {
    this.collection = EVTURN.fn.get('links');
    this.render();
  },

  render: function() {
    EVTURN.fn.setView(this.$el, this.viewContainer);
    EVTURN.fn.appendModels('.link-items', this.collection, this.itemContainer);
  },

});