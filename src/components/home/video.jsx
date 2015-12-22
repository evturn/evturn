'use strict';
import React from 'react';
import sources from 'sources/videos';

import CSSModules from 'react-css-modules';
import css from './video.pre';
import 'styles/typography/animate.less';

const Video = React.createClass({
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
  getDefaultProps() {
    return {
      poster: require('images/site/banana-plants.png')
    };
  },
  componentDidMount() {
    this.init();
  },
  render() {
    return (
      <video
        className="animated fadeIn"
        ref={ (video) => this.video = video }
        poster={ this.props.poster }
        type="video/mp4">
      </video>
    );
  }
});

export default CSSModules(Video, css);