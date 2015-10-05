let Compiler = require('../templates');

module.exports = Backbone.View.extend({
  thumbnailViewTemplate: Compiler.thumbnailView(),
  thumbnailItemTemplate: Compiler.thumbnailItem(),
  el: '.thumbnails-wrapper',
  events: {
    'click .thumbnail-item' : 'scrollUp'
  },
  initialize(selector) {
    this.render(selector);
  },
  render($selector) {
    let collection = EVTURN.get('apps');

    this.$el.empty();
    $('.work').append(this.thumbnailViewTemplate());

    for (var i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $('.thumbnails-wrapper').append(this.thumbnailItemTemplate(model));
    }

    return this;
  }
});