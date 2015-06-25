var ev = ev || {};

ev.Carousel = Backbone.View.extend({
  el: '.work',
  viewContainer   : _.template($('#carousel-container-template').html()),
  itemContainer   : _.template($('#carousel-item-template').html()),
  itemDescription : _.template($('#carousel-panel-template').html()),
  itemPreloader   : _.template($('#carousel-preloader-template').html()),
  initialize: function() {
    this.render();
    this.setChildViews();
  },
  render: function() {
    this.$el.html(this.viewContainer(this.model.toJSON()));
    this.preloader();
    this.child = new ev.Thumbnails();
    return this;
  },
  setChildViews: function() {
    $('.carousel-panel').html(this.itemDescription(this.model.toJSON()));
    var images = this.model.get('items');
    for (var i = 0; i < images.length; i++) {
      $('.carousel-inner').append(this.itemContainer(images[i]));
    }
    return this;
  },
  preloader: function() {
    $('.carousel-image-container').append(this.itemPreloader());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut('slow');
  }
});