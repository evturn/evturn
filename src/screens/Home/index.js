import React, { Component } from 'react';
import styles from './style.css';
import ActivityIndicator from 'shared/ActivityIndicator';
import Logo from './Logo';
import Video from './Video';

class Home extends Component {
  state = {
    isPlaying: false,
  }

  handleVideoStateChange = isPlaying => {
    this.setState({ isPlaying });
  }

  render() {
    return (
      <div className={styles.root}>
        <Video 
          onVideoStateChange={this.handleVideoStateChange}
          urls={this.props.data.video} />
        <div className={styles.overlay}>
          { this.state.isPlaying
              ? <Logo />
              : <ActivityIndicator />}
        </div>
      </div>
    );
  }
}

export default Home;
