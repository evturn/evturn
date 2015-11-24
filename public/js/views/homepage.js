'use strict';
const Video = require('../lib/video');
const videos = require('../data/videos');

module.exports = Backbone.View.extend({
  el: '.page-index',
  video: null,
  initialize() {
    this.load(this.pages.index)

      .then((template) => this.render(template))

      .then(() => this.initVideoPlayer())

      .then(() => this.spinner())

      .catch((err) => console.log(err));
  },
  render(template) {
    this.$parent.html(template());
    return this;
  },
  initVideoPlayer() {
    const element = document.getElementById('ev-vid');

    this.video = Video(element, videos);
    return this;
  },
  spinner() {
    const $container = $('#preloader');
    const $image = $('.preloader');

    $container.delay(500).fadeOut();
    $image.delay(600).fadeOut(600);
    return this;
  }
});