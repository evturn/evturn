'use strict';

EVTURN.IndexView = Backbone.View.extend({

  el: '.index',
  initialize: function initialize() {
    this.render();
    // this.appendProjectThumbnails();
    this.setVideo();
  },
  render: function render() {
    this.$el.html(EVTURN.heroTemplate());

    return this;
  },
  setVideo: function setVideo() {
    $(document).ready(function () {
      var video = document.getElementById('ev-vid');

      EVTURN.Video(video);
    });
  },
  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }
});