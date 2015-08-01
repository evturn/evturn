EVTURN.Thumbnails = Backbone.View.extend({

  el: '.thumbnails-wrapper',
  viewContainer : _.template($('#thumbnails-container-template').html()),
  itemContainer : _.template($('#thumbnail-item-template').html()),

  events: {
    'click .thumbnail-item' : 'EVTURN.animations.scrollUp'
  },

  initialize(selector) {
    this.collection = this.get('projects');
    this.render(selector);
  },

  render($selector) {
    this.$el.empty();
    $selector.append(this.viewContainer());
    this.appendModels('.thumbnails-wrapper', this.collection, this.itemContainer);

    return this;
  },
});