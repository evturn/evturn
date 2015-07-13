EVTURN.Thumbnails = Backbone.View.extend({
  el: '.thumbnail-items',
  viewContainer: _.template($('#thumbnails-container-template').html()),
  itemContainer: _.template($('#thumbnail-item-template').html()),
  initialize: function(elem) {
    this.collection = EVTURN.fn.get('projects');
    this.render(elem);
  },
  events: {
    'click .thumbnail-item' : 'scrollUp'
  },
  render: function($selector) {
    this.$el.empty();
    $selector.append(this.viewContainer());
    EVTURN.fn.appendModels('thumbnail-items', this.collection, this.itemContainer);
  },
  scrollUp: function() {
    EVTURN.animations.scrollUp();
  },
});