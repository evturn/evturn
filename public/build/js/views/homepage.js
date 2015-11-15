'use strict';
const Video = require('../lib/video');
const engine = require('../lib/view-engine');
const loadTemplate = engine.loadTemplate;

module.exports = Backbone.View.extend({
  el: '.index',
  initialize() {
    loadTemplate({
      filepath: '../../views/index.hbs',
      success: this.render
    });
  },
  render(template) {
    $('.site-content').html(template());
    const $container = $('#preloader');
    const $image = $('.preloader');
    const videoElement = document.getElementById('ev-vid');
    const video = new Video(videoElement);

    $container.delay(500).fadeOut();
    $image.delay(600).fadeOut(600);
    return this;
  },
});