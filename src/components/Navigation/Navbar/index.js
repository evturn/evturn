import React from 'react';
import styles from './style.css';

const Navbar = ({ menuVisible, onClick }) => {
  const burgerStyles = menuVisible ? ` ${styles.open}` : '';
  return (
    <div 
      className={styles.root + burgerStyles}
      onClick={onClick}>
      <hr className={styles.bar} />
      <hr className={styles.bar} />
    </div>
  );
};

export default Navbar;
