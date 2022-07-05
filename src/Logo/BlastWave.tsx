import styles from './BlastWave.css';

type Props = unknown;

export const BlastWave = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.sq} />
        <div className={styles.box} />
        <div className={styles.under} />
      </div>
    </div>
  );
};