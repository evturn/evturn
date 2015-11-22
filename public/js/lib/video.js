'use strict';
exports = module.exports = Video;

const proto = {
  init: function init(element, sources) {
    this.video = element;
    this.video.type = 'video/mp4';
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.preload = 'auto';
    this.video.addEventListener('ended', () => this.start());
    this.last = sources.length - 1;
    this.initialized = false;
    this.current = 0;
    this.playlist = sources;
    this.start();
  },
  start: function start() {
    const isLastVideo = !!(this.current === this.last);
    const isInitialized = this.initialized;

    if (!isInitialized) {
      this.initialized = true;
    } else if (isLastVideo) {
      this.current = 0;
    } else {
      this.current += 1;
    }

    this.video.src = this.playlist[this.current];
    this.video.play;
    this.video.playbackRate = 0.5;
  }
};

function Video(element, sources) {
  const video = {};

  _.extend(video, proto);
  video.init(element, sources);
  return video;
};