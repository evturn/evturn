var ev = ev || {};

ev.IndexView = Backbone.View.extend({
  el: '.index',
  viewContainer: _.template($('#index-container-template').html()),
  initialize: function() {
    this.collection = ev.fetch('projects');
    this.render();
  },
  events: {
    'click .thumbnail-item' : 'select'
  },
  render: function() {
    this.$el.html(this.viewContainer());
    this.child = new ev.Thumbnails();
    return this;
  },
  select: function(e) {
    var id = $(e.currentTarget).data('id');
    var model = this.collection.get(id) || this.collection.get(1);
    var carousel = new ev.Carousel({model: model});
  },
});