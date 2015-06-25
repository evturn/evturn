var ev = ev || {};

ev.AboutView = Backbone.View.extend({
  el: '.about',
  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  initialize: function() {
    this.collection = ev.tech();
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    ev.appendModels('technology-items', this.collection, this.itemContainer);
    this.statCount();
    return this;
  },
  statCount: function() {
    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });
  },
});