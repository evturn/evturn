import data from '@/data.json';
import { Card, Header } from '@/Card';
import styles from './Work.css';

type Props = {
  children?: React.ReactNode;
};

export const Work = (props: Props) => {
  window.scroll(0, 0);

  return (
    <div className={styles.root}>
      <Card.Container>
        {data.work.map(item =>
          <Card
            item={item}
            key={item.slug}>
            <Header
              style={{
                backgroundImage: `url(${lookup[item.slug]})`,
              }} />
          </Card>)}
      </Card.Container>
    </div>
  );
};

type Slug = typeof data['work'][number]['slug'];

type Lookup<T extends Slug = Slug> = {
  [Key in T]: string;
};

const lookup = data.work.reduce<Lookup>((acc, x) => ({
  ...acc,
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  [x.slug]: require(`@static/${x.thumbnail}`) as string,
}), {});