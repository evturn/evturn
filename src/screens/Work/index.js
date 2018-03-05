import React from 'react';
import Card from 'shared/Card';
import styles from './style.css';

const Work = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {data.software.map(item =>
          <Card 
            item={item}
            key={item.slug}/>
        )}
      </div>
    </div>
  );
};

export default Work;
