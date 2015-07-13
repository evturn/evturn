EVTURN.AboutView = Backbone.View.extend({
  el: '.about',
  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  statItem: _.template($('#stat-item-template').html()),
  initialize: function() {
    this.collection = EVTURN.fn.get('technologies');
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    EVTURN.fn.appendModels('.technology-items', this.collection, this.itemContainer);
    EVTURN.fn.appendObjectsArray('.statistics.stat-items', EVTURN.data.stats, this.statItem);
    EVTURN.animations.statCount();
    return this;
  },
});