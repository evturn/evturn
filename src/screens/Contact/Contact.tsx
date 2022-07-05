import data from '@/data.json';
import styles from './Contact.css';

type Props = {
  children?: React.ReactNode;
};

export const Contact = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {data.contact.map(item =>
          <div
            className={styles.item}
            key={item.href}>
            <a
              className={styles.link}
              href={item.href}
              rel="noreferrer"
              target="_blank">
              {item.text}
            </a>
          </div>)}
      </div>
    </div>
  );
};