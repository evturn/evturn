EVTURN.IndexView = Backbone.View.extend({

  el: '.index',

  viewContainer: _.template($('#index-container-template').html()),

  initialize() {
    this.render();
    this.appendProjectThumbnails();
  },

  render() {
    let selector = this.$el;
    let template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendProjectThumbnails() {
    let tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }

});