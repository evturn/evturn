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
    let collection = this.get('apps'),
        models = collection.models;

    this.$el.empty();
    $('.work').append(this.thumbnailViewTemplate());
    this.compileAndAppend($('.thumbnails-wrapper'), models, this.thumbnailItemTemplate);
    return this;
  }
});