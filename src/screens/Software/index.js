import React from 'react';
import Card from 'shared/Card';
import Icons from 'shared/Icons';
import styles from './style.css';

const Icon = ({ item }) => {
  const C = Icons[item.image];
  return <C style={{ width: '200px', height: '200px' }} />;
};

const Software = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {data.software.map(item =>
          <Card 
            headerProps={{children: <Icon item={item} />}}
            item={item}
            key={item.slug}/>
        )}
      </div>
    </div>
  );
};

export default Software;
