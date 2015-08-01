EVTURN.AboutView = Backbone.View.extend({

  el: '.about',

  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  statItem: _.template($('#stat-item-template').html()),
  bioItem: _.template($('#bio-paragraph-template').html()),

  initialize: function() {
    this.collection = this.get('technologies');
    this.render();
  },

  render: function() {
    this.setView(this.$el, this.viewContainer);
    this.appendModels('.technology-items', this.collection, this.itemContainer);
    this.appendObjectsArray('.statistics.stat-items', EVTURN.data.stats, this.statItem);
    this.appendArray('.paragraphs', EVTURN.data.bio, this.bioItem);
    EVTURN.animations.statCount();

    return this;
  },

});