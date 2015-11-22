'use strict';
const data = require('../data');

module.exports = class Video {
  constructor(videoElement) {
    this.video = videoElement;
    this.video.type = 'video/mp4';
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.preload = 'auto';
    this.video.addEventListener('ended', () => this.init());

    this.initialized = false;
    this.current = 0;
    this.playlist = data.videos;
    this.last = data.videos.length - 1;
    this.init();
  }
  init() {
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