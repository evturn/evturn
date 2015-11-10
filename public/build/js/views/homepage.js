'use strict';
const videoPlayer = require('../lib/video-player');
const engine = require('../lib/view-engine');
const loadTemplate = engine.loadTemplate;

module.exports = Backbone.View.extend({
  el: '.index',
  filepath: '../../views/index.hbs',
  initialize() {
    loadTemplate({
      filepath: this.filepath,
      success: this.render
    });
  },
  render(template) {
    $('.index').html(template());
    const video = document.getElementById('ev-vid');
    videoPlayer(video);
    return this;
  },
});