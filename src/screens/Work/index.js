import React from 'react';
import Card from 'shared/Card';
import styles from './style.css';

const Work = ({ data }) => {
  window.scroll(0, 0);
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {data.work.map(item =>
          <Card 
            headerProps={{ 
              style: {
                backgroundImage: `url(${require(`static/media/${item.thumbnail}`)})`,
              },
            }}
            item={item}
            key={item.slug} />
        )}
      </div>
    </div>
  );
};

export default Work;
