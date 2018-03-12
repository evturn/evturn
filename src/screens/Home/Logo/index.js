import React from 'react';
import Avatar from 'shared/Avatar';
import Polygon from 'shared/Polygon';
import styles from './style.css';

const Logo = props => {
  return (
    <div className={styles.root}>
      <Polygon />
      <Avatar />
    </div>
  );
};

export default Logo;
