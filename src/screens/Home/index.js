import React, { Component } from 'react';
import styles from './style.css';
import Video from './Video';

class Home extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Video urls={this.props.data.video} />
      </div>
    );
  }
}

export default Home;
