import { Avatar } from './Avatar';
import styles from './Logo.css';

type Props = {
  children?: React.ReactNode;
};

export const Logo = (props: Props) => {
  return (
    <div className={styles.root}>
      {props.children}
      <div className={styles.avatar}>
        <Avatar className={styles.svg} />
      </div>
    </div>
  );
};