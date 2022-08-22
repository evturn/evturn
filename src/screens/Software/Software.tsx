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
      <Card.Container>
        {data.software.map(item =>
          <Card
            item={item}
            key={item.slug}>
            <DynamicHeader
              image={item.image}
              thumbnail={item.thumbnail} />
          </Card>)}
      </Card.Container>
    </div>
  );
};

type DynamicHeaderProps = {
  image?:     string;
  thumbnail?: string;
};

const DynamicHeader = (props: DynamicHeaderProps) => {
  if (props.thumbnail) {
    return (
      <Header
        style={{
          /* eslint-disable-next-line @typescript-eslint/no-var-requires */
          backgroundImage: `url(${require(`@static/${props.thumbnail}`) as string})`,
        }} />
    );
  }

  return (
    <Header>
      {createElement(Icons[props.image])}
    </Header>
  );
};