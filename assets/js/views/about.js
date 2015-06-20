var AboutView = Backbone.View.extend({
  el: '.about',
  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    for (var i = this.collection.length - 1; i >= 0; i--) {
      $('.about-stack').append(this.itemContainer(this.collection.models[i].toJSON()));
    }
    this.statCount();
    return this;
  },
  statCount: function() {
    $(".stat-count").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });
  },
});