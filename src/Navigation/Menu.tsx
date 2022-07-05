import { Link } from 'react-router-dom';
import styles from './Menu.css';

type Props = {
  items: {
    route: string;
    title: string;
  }[];
  menuVisible: boolean;
  onClick: () => unknown;
};

export const Menu = ({ items, menuVisible, onClick }: Props) => {
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