import { CardItem } from '@/types';
import styles from './Card.css';

type Props = {
  children?: React.ReactNode;
  item:      CardItem;
};

export const Card = (props: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.wrap}>

        {props.children}

        <div className={styles.info}>

          <div className={styles.content}>
            <div className={styles.title}>{props.item.name}</div>
            <p className={styles.body}>{props.item.description}</p>
          </div>

          <Footer item={props.item} />

        </div>
      </div>
    </div>
  );
};

type HeaderProps = {
  children?: React.ReactNode;
  style?:    React.CSSProperties;
};

export const Header = (props: HeaderProps) => {
  return (
    <div
      {...props}
      className={styles.header} />
  );
};

type FooterProps = {
  item: CardItem;
};

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.footer}>
      {props.item.links.map(link =>
        <div key={link.href}>
          <a
            className={styles.link}
            href={link.href}
            rel="noreferrer"
            target="_blank">
            {link.text}
          </a>
        </div>)}
    </div>
  );
};

const CardsContainer = (props: Pick<Props, 'children'>) => {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  );
};

Card.Container = CardsContainer;