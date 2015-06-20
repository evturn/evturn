var ev = ev || {};

ev.Thumbnails = Backbone.View.extend({
  el: '.thumbnail-items',
  itemContainer: _.template($('#thumbnail-item-template').html()),
  initialize: function() {
    this.collection = ev.fetch('projects');
    this.render();
  },
  render: function() {
    for (var i = this.collection.length - 1; i >= 0; i--) {
      $('.thumbnail-items').append(this.itemContainer(this.collection.models[i].toJSON()));
    }
    return this;
  },
});