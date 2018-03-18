import React from 'react';
import Content from './Content.js';
import Footer from './Footer.js';
import styles from './style.css';

const Card = ({ headerProps, item }) => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div
          {...headerProps}
          className={styles.header}
          key={item.slug} />

        <div className={styles.info}>
          <Content item={item} />
          <Footer item={item} />
        </div>

      </div>
    </div>
  );
};

export default Card;
