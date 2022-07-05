import { useCallback, useState } from 'react';
import { Menu } from './Menu';
import { Navbar } from './Navbar';
import styles from './Nav.css';

type Props = {
  menu: {
    route: string;
    title: string;
  }[];
};

export const Nav = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const toggle = useCallback(() => {
    setVisible(!visible);
  }, [
    visible,
  ]);

  const classes = {
    overlay: visible ? `${styles.overlay}` : `${styles.overlay} ${styles.hide}`,
  };

  return (
    <>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.wrap}>
            <Navbar
              menuVisible={visible}
              onClick={toggle} />
            <Menu
              items={props.menu}
              menuVisible={visible}
              onClick={toggle} />
          </div>
        </header>
      </div>
      <div
        className={classes.overlay}
        onClick={toggle} />
    </>
  );
};