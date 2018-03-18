import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const Menu = ({ items, menuVisible, onClick }) => {
  const menuStyles = menuVisible ? ` ${styles.open}` : '';
  return (
    <nav className={styles.root + menuStyles}>
      <ul 
        className={styles.ul}
        role="menu">
        {items.map(item =>
          <li
            className={styles.li}
            key={item.title}
            role="menuitem">
              <Link
                className={styles.link}
                onClick={onClick}
                to={item.route}>
                {item.title}
              </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
