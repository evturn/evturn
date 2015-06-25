var ev = ev || {};

ev.Thumbnails = Backbone.View.extend({
  el: '.thumbnail-items',
  viewContainer: _.template($('#thumbnails-container-template').html()),
  itemContainer: _.template($('#thumbnail-item-template').html()),
  initialize: function(elem) {
    this.collection = ev.work();
    this.render(elem);
  },
  events: {
    'click .thumbnail-item' : 'scrollUp'
  },
  render: function(elem) {
    $('.' + elem).append(this.viewContainer());
    ev.appendModels('thumbnail-items', this.collection, this.itemContainer);
  },
  scrollUp: function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  },
});