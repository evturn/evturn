'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Video = React.createClass({
  beginPlayback() {
    this.player.src = this.state.playlist[this.state.current];
    this.player.play;
    this.player.playbackRate = 0.5;
  },
  restartPlaylist() {
    return this.setState({
      current: 0
    });
  },
  startNextVideo() {
    return this.setState({
      current: this.state.current + 1
    });
  },
  onVideoChange() {
    this.player.addEventListener('ended', () => {
      if (this.state.current === this.state.last) {
        this.restartPlaylist();
      } else {
        this.startNextVideo();
      }

      this.beginPlayback();
    });
  },
  mergeStateAndDOM() {
    for (let attr in this.state) {
      this.player[attr] = this.state[attr];
    }
  },
  getDefaultProps() {
    return {
      current: 0,
      autoplay: true,
      muted: true,
      type: 'video/mp4',
      preload: 'auto',
      poster: require('images/site/banana-plants.png')
    };
  },
  getInitialState() {
    const last = this.props.playlist.length - 1;

    return { last, ...this.props };
  },
  componentDidMount() {
    this.onVideoChange();
    this.beginPlayback();
    this.mergeStateAndDOM();
  },
  render() {
    return (
      <div className='animated fadeIn'>
        <video
          ref={(player) => this.player = player}
          poster={this.state.poster}
          type={this.state.type}>
        </video>
      </div>
    );
  }
});

export default CSSModules(Video, styles);