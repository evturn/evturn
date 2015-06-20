var ev = ev || {};

ev.Carousel = Backbone.View.extend({
  el: '.work',
  viewContainer: _.template($('#carousel-container-template').html()),
  itemContainer: _.template($('#carousel-item-template').html()),
  itemDescription: _.template($('#carousel-panel-template').html()),
  initialize: function() {
    this.render();
    this.setChildViews();
  },
  render: function() {
    this.$el.html(this.viewContainer(this.model.toJSON()));
    this.child = new ev.Thumbnails();
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