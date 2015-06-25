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
    for (var i = this.collection.length - 1; i >= 0; i--) {
      this.$el.append(this.itemContainer(this.collection.models[i].toJSON()));
    }
    return this;
  },
  scrollUp: function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  }
});