var ev = ev || {};

ev.Carousel = Backbone.View.extend({
  el: '.work',
  viewContainer: _.template($('#carousel-container-template').html()),
  itemContainer: _.template($('#carousel-item-template').html()),
  itemDescription: _.template($('#carousel-text-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    var collection = ev.fetch('projects');
    this.model = this.model || collection.get(1);
    this.$el.html(this.viewContainer(this.model.toJSON()));
    this.setChildViews();
    return this;
  },
  setChildViews: function() {
    var images = this.model.get('items');
    for (var i = 0; i < images.length; i++) {
      $('.carousel-inner').append(this.itemContainer(images[i]));
    }
    $('.project-info-container').html(this.itemDescription(this.model.toJSON()));
    return this;
  },
});