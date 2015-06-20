var ev = ev || {};

ev.Carousel = Backbone.View.extend({
  el: '.carousel-container',
  itemContainer: _.template($('#carousel-item-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    var images = this.model.get('items');
    for (var i = 0; i < images.length; i++) {
      $('.carousel-inner').prepend(this.itemContainer(images[i]));
    }
  },
});

ev.WorkView = Backbone.View.extend({
  el: '.work',
  viewContainer: _.template($('#carousel-container-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    var collection = ev.fetch('projects');
    var model = this.model || collection.get(1);
    this.$el.html(this.viewContainer(model.toJSON()));
    var child = new ev.Carousel({model: model});
    return this;
  },
});