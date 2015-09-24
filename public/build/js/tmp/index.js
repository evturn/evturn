'use strict';

var Player = require('./evturn-video'),
    Compiler = require('./evturn-templates');

module.exports = Backbone.View.extend({
  heroTemplate: Compiler.heroCompiler(),
  el: '.index',
  initialize: function initialize() {
    this.render();
    this.setVideo();
  },
  render: function render() {
    this.$el.html(this.heroTemplate());

    return this;
  },
  setVideo: function setVideo() {
    $(document).ready(function () {
      var video = document.getElementById('ev-vid');

      Player(video);
    });
  }
});