var ev = ev || {};

ev.IndexView = Backbone.View.extend({
  el: '.index',
  viewContainer: _.template($('#index-container-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    var tn = new ev.Thumbnails('index');
    return this;
  },
});