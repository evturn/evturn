'use strict';
const data = require('../data');

module.exports = class Video {
  constructor(videoElement) {
    this.video = videoElement;
    this.video.type = 'video/mp4';
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.preload = 'auto';

    this.initialized = false;
    this.current = null;
    this.playlist = data.videos;
    this.total = data.videos.length;

    this.init();
  }
  init() {
    const isLastVideo = !!(this.current === this.total - 1);
    const isInitialized = this.initialized;

    if (!isInitialized || isLastVideo) {
      this.initialized = true;
      this.current = 0;
    } else {
      this.current += 1;
    }

    this.video.src = this.playlist[this.current];
    this.video.addEventListener('ended', () => this.init());
    this.video.play;
    this.video.playbackRate = 0.5;
  }
};