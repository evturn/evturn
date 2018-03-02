import React, { Component } from 'react';
import styles from './style.css';

class Video extends Component {
  state = {
    index: 0,
    src: '',
  }

  static defaultProps = {
    urls: [],
  }

  componentWillMount() {
    this.updateVideoSrc(this.state.index);
  }

  componentDidMount() {
    this.player.addEventListener('ended', () => this.updateVideoSrc(this.state.index));
    this.player.addEventListener('playing', () => this.player.playbackRate = 0.65);
  }

  captureRef = ref => {
    this.player = ref;
  }

  getNextIndex = index => {
    return index >= this.props.urls.length - 1 ? 0 : index + 1;
  }

  getSourceURL = index => {
    return this.props.urls[index];
  }

  updateVideoSrc = index => {
    this.setState({
      index: this.getNextIndex(index),
      src: this.getSourceURL(index),
    });
  }

  render() {
    return (
      <video 
        autoPlay 
        className={styles.root}
        muted
        playsInline
        preload="auto"
        ref={this.captureRef}
        src={this.state.src} 
        type="video/mp4" />
    );
  }
}

export default Video;
