import React from 'react';
import styles from './style.css';

const Contact = props => {
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {props.data.contact.map(item => 
          <div 
            className={styles.item} 
            key={item.href}>
            <a 
              className={styles.link}
              href={item.href}
              target="_blank">
              {item.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
