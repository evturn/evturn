EVTURN.AboutView = Backbone.View.extend({

  el: '.about',

  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  statItem: _.template($('#stat-item-template').html()),
  bioItem: _.template($('#bio-paragraph-template').html()),

  initialize: function() {
    this.collection = EVTURN.get('technologies');
    this.render();
  },

  render: function() {
    EVTURN.setView(this.$el, this.viewContainer);
    EVTURN.appendModels('.technology-items', this.collection, this.itemContainer);
    EVTURN.appendObjectsArray('.statistics.stat-items', EVTURN.data.stats, this.statItem);
    EVTURN.appendArray('.paragraphs', EVTURN.data.bio, this.bioItem);
    EVTURN.animations.statCount();
    return this;
  },

});