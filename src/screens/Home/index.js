import React, { Component } from 'react';
import styles from './style.css';
import BlastWave from './BlastWave';
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
    const rootClass = !this.state.video 
                    ? ' ' + styles.cool
                    : '';
    return (
      <div className={styles.root + rootClass}>
        <Video 
          onVideoCanPlay={this.handleVideoCanPlay}
          onVideoIsPlaying={this.handleVideoIsPlaying}
          urls={this.props.data.video} />
        <div className={styles.overlay}>
          <Logo>
            <BlastWave />
          </Logo>
        </div>
      </div>
    );
  }
}

export default Home;
