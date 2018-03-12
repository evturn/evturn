import React from 'react';
import Avatar from 'shared/Avatar';
import Polygon from 'shared/Polygon';
import styles from './style.css';

const Logo = props => {
  return (
    <div className={styles.root}>
      <Polygon className={styles.shape} />
      <div className={styles.avatar}>
        <Avatar className={styles.svg} />
      </div>
    </div>
  );
};

export default Logo;
