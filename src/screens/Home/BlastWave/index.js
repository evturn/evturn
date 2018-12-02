import React, { Component } from 'react';
import styles from './style.css';

class BlastWave extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          <div className={styles.sq} />
          <div className={styles.box} />
          <div className={styles.under} />
        </div>
      </div>
    );
  }
}

export default BlastWave;
