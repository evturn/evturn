EVTURN.IndexView = Backbone.View.extend({

  el: '.index',

  viewContainer: _.template($('#index-container-template').html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    EVTURN.setView(this.$el, this.viewContainer);
    let tn = new EVTURN.Thumbnails(this.$el);

    return this;
  },

});