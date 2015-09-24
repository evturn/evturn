'use strict';

EVTURN.Thumbnails = Backbone.View.extend({

  el: '.thumbnails-wrapper',
  events: {
    'click .thumbnail-item': 'scrollUp'
  },
  initialize: function initialize(selector) {
    this.render(selector);
  },
  render: function render($selector) {
    var collection = EVTURN.get('apps');

    this.$el.empty();
    $selector.append(EVTURN.thumbnailViewTemplate());

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $('.thumbnails-wrapper').append(EVTURN.thumbnailItemTemplate(model));
    }

    return this;
  }
});