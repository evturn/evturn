EVTURN.Thumbnails = Backbone.View.extend({

  el: '.thumbnails-wrapper',
  viewContainer : _.template($('#thumbnails-container-template').html()),
  itemContainer : _.template($('#thumbnail-item-template').html()),

  initialize: function(selector) {
    this.collection = this.get('projects');
    this.render(selector);
  },

  events: {
    'click .thumbnail-item' : 'EVTURN.animations.scrollUp'
  },

  render: function($selector) {
    this.$el.empty();
    $selector.append(this.viewContainer());
    EVTURN.appendModels('.thumbnails-wrapper', this.collection, this.itemContainer);

    return this;
  },
});