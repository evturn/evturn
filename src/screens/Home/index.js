import React, { Component } from 'react';
import styles from './style.css';
import ActivityIndicator from 'shared/ActivityIndicator';
import Logo from './Logo';
import Video from './Video';

class Home extends Component {
  state = {
    canPlay: false,
    isPlaying: false,
    video: true,
  }

  componentDidMount() {
    this.videoTimeout = setTimeout(() => {
      if (!this.state.canPlay) {
        this.setState({video: false});
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.videoTimeout);
  }

  handleVideoCanPlay = canPlay => {
    this.setState({ canPlay });
  }

  handleVideoIsPlaying = isPlaying => {
    this.setState({ isPlaying });
  }

  render() {
    return (
      <div className={styles.root}>
        <Video 
          onVideoCanPlay={this.handleVideoCanPlay}
          onVideoIsPlaying={this.handleVideoIsPlaying}
          urls={this.props.data.video} />
        <div className={styles.overlay}>
          { this.state.isPlaying || !this.state.video
              ? <Logo />
              : <ActivityIndicator />}
        </div>
      </div>
    );
  }
}

export default Home;
