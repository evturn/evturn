import React from 'react';
import Content from './Content.js';
import Footer from './Footer.js';
import Icons from 'shared/Icons';
import styles from './style.css';

const Icon = ({ item }) => {
  const C = Icons[item.image];
  return <C style={{ width: '200px', height: '200px' }} />;
};

const Card = ({ item }) => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div
          className={styles.header}
          key={item.slug}>
          <Icon item={item} />
        </div>

        <div className={styles.info}>
          <Content item={item} />
          <Footer item={item} />
        </div>

      </div>
    </div>
  );
};

export default Card;
