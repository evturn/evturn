import React from 'react';
import styles from './style.css';

const ActivityIndicator = props => {
  const classNames = Array.from({length: 5}).map((_, i) => styles[`w${i}`]); 
  return (
    <div className={styles.w}>
      {classNames.map((c, i) =>
        <div 
          className={c}
          key={c} />
      )}
    </div>
  );
};

export default ActivityIndicator;
