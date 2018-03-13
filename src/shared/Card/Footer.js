import React from 'react';
import styles from './style.css'

const Footer = ({ item }) => {
  return (
    <div className={styles.footer}> 
      {item.links.map(link =>
        <div key={link.href}>
          <a 
            className={styles.link} 
            href={link.href} 
            target="_blank">
            {link.text}
          </a>
        </div>)}
    </div>
  );
};

export default Footer;
