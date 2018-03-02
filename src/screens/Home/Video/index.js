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
    this.setState({src: this.props.urls[this.state.index]})
  }

  render() {
    return (
      <video 
        autoPlay 
        className={styles.root}
        muted
        playsInline
        preload="auto"
        src={this.state.src} 
        type="video/mp4"
      />
    );
  }
}

export default Video;
