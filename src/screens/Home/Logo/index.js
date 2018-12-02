import React from 'react';
import Avatar from 'shared/Avatar';
import styles from './style.css';

const Logo = props => {
  return (
    <div className={styles.root}>
      {props.children}
      <div className={styles.avatar}>
        <Avatar className={styles.svg} />
      </div>
    </div>
  );
};

export default Logo;
