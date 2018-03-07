import React from 'react';
import styles from './style.css';

const ActivityIndicator = props => {
  const classNames = Array.from({length: 5}).map((_, i) => styles[`w${i}`]); 
  return (
    <div className={styles.root}>
      <div className={styles.waves}>
        {classNames.map((c, i) =>
          <div 
            className={c}
            key={c} />
        )}
      </div>
    </div>
  );
};

export default ActivityIndicator;
