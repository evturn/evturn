import React, { Component } from 'react';
import styles from './style.css';
import ActivityIndicator from 'shared/ActivityIndicator';
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
          <div className={styles.mid}>
            { this.state.isPlaying
                ? <h1>Sup</h1>
                : <ActivityIndicator />}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
