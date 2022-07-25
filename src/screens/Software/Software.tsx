import { createElement } from 'react';
import data from '@/data.json';
import { Card, Header } from '@/Card';
import * as Icons from '@/Icons';
import styles from './Software.css';

type Props = {
  children?: React.ReactNode;
};

export const Software = (props: Props) => {
  window.scroll(0, 0);

  return (
    <div className={styles.root}>
      <div className={styles.items}>
        {data.software.map(item =>
          <Card
            item={item}
            key={item.slug}>
            <Header>
              {createElement(Icons[item.image])}
            </Header>
          </Card>)}
      </div>
    </div>
  );
};