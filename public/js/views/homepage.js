'use strict';
const Video = require('../lib/video');
const videos = require('../data/videos');

module.exports = Backbone.View.extend({
  el: '.page-index',
  video: null,
  initialize() {
    this.render();
  },
  render() {
    this.load(this.pages.index)
      .then((template) => {
        this.$parent.html(template());
        const $container = $('#preloader');
        const $image = $('.preloader');
        const videoElement = document.getElementById('ev-vid');

        this.video = Video(videoElement, videos);
        $container.delay(500).fadeOut();
        $image.delay(600).fadeOut(600);
    });
  },
});