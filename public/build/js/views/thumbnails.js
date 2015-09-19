EVTURN.Thumbnails = Backbone.View.extend({

  el: '.thumbnails-wrapper',
  viewContainer : _.template($('#thumbnails-container-template').html()),
  itemContainer : _.template($('#thumbnail-item-template').html()),

  events: {
    'click .thumbnail-item' : 'scrollUp'
  },

  initialize(selector) {
    this.render(selector);
  },

  render($selector) {
    let collection = EVTURN.get('apps');

    this.$el.empty();
    $selector.append(EVTURN.thumbnailViewTemplate());

    for (var i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $('.thumbnails-wrapper').append(EVTURN.thumbnailItemTemplate(model));
    }

    return this;
  },
});