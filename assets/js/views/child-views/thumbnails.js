var ev = ev || {};

ev.Thumbnails = Backbone.View.extend({
  el: '.thumbnail-items',
  itemContainer: _.template($('#thumbnail-item-template').html()),
  initialize: function() {
    this.collection = ev.work();
    this.render();
  },
  events: {
    'click .thumbnail-item' : 'scrollUp'
  },
  render: function() {
    this.$el.empty();
    ev.appendModels('thumbnail-items', this.collection, this.itemContainer);
  },
  scrollUp: function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  }
});