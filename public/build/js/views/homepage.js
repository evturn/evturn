'use strict';
const videoPlayer = require('../lib/video-player');
const loadTemplate = require('../lib/template-loader');

module.exports = Backbone.View.extend({
  templates: [],
  el: '.index',
  filepath: '../../views/index.hbs',
  initialize() {
    loadTemplate({
      templates: this.templates,
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