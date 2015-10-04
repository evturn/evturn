let Player = require('../video-player'),
    Compiler = require('../templates');

module.exports = Backbone.View.extend({
  heroTemplate: Compiler.hero(),
  el: '.index',
  initialize() {
    this.render();
    this.setVideo();
  },
  render() {
    this.$el.html(this.heroTemplate());

    return this;
  },
  setVideo() {
    $(document).ready(function() {
      let video = document.getElementById('ev-vid');

      Player(video);
    });
  }
});