EVTURN.IndexView = Backbone.View.extend({

  el: '.index',
  initialize() {
    this.render();
    this.appendProjectThumbnails();
  },
  render() {
    this.$el.html(EVTURN.heroTemplate());

    return this;
  },
  appendProjectThumbnails() {
    let tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }
});