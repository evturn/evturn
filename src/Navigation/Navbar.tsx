import styles from './Navbar.css';

type Props = {
  menuVisible: boolean;
  onClick: () => unknown;
};

export const Navbar = ({ menuVisible, onClick }: Props) => {
  const burgerStyles = menuVisible ? ` ${styles.open}` : '';
  return (
    <div
      className={styles.root + burgerStyles}
      onClick={onClick}
      role="button">
      <hr className={styles.bar} />
      <hr className={styles.bar} />
    </div>
  );
};