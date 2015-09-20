EVTURN.IndexView = Backbone.View.extend({

  el: '.index',
  initialize() {
    this.render();
    // this.appendProjectThumbnails();
    this.setVideo();
  },
  render() {
    this.$el.html(EVTURN.heroTemplate());

    return this;
  },
  setVideo() {
    $(document).ready(function() {
      let video = document.getElementById('ev-vid');

      EVTURN.Video(video);
    });
  },
  appendProjectThumbnails() {
    let tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }
});