'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import sources from '../../models/videos';

export const Video = React.createClass({
  init() {
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
  start() {
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
  },
  componentDidMount() {
    this.init();
  },
  render() {
    return (
      <video
      id="ev-vid"
      ref={(video) => this.video = video}
      poster="../images/site/vid-poster.gif"
      type="video/mp4"></video>
    );
  }
});