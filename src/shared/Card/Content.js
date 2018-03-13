import React from 'react';
import styles from './style.css';

const Content = ({ item }) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        {item.name}
      </div>
      <p className={styles.body}>
        {item.description}
      </p>
    </div>
  );
};

export default Content;
