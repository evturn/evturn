import React from 'react';
import Avatar from 'shared/Avatar';
import styles from './style.css';

const Logo = props => {
  return (
    <div className={styles.root}>
      <div className={styles.hedron}>
        <div className={styles.tris}>
          <div className={styles.squa}>
            <div className={styles.tria} />
            <div className={styles.trix} />
          </div>
          <div className={styles.squb}>
            <div className={styles.trix} />
            <div className={styles.trib} />
          </div>
        </div>
        <div className={styles.bars}> 
          <div className={styles.bara}>
            <div className={styles.edgea} />
            <div className={styles.anga} />
            <div className={styles.angb} />
            <div className={styles.edgeb} />
          </div>
          <div className={styles.barb}> 
            <div className={styles.diar} />
            <div className={styles.pyra} />
            <div className={styles.pyrb} />
            <div className={styles.dial} />
          </div>
          <div className={styles.barc}> 
            <div className={styles.diar} />
            <div className={styles.pyra} />
            <div className={styles.pyrb} />
            <div className={styles.dial} />
          </div>
          <div className={styles.bard}>
            <div className={styles.edgea} />
            <div className={styles.anga} />
            <div className={styles.angb} />
            <div className={styles.edgeb} />
          </div>
        </div>
        <div className={styles.tris}>
          <div className={styles.squc}>
            <div className={styles.tric} />
            <div className={styles.triz} />
            <div className={styles.trix} />
          </div>
          <div className={styles.squd}>
            <div className={styles.trix} />
            <div className={styles.triz} />
            <div className={styles.trid} />
          </div>
        </div>
      </div>
      <div className={styles.avatar}>
      </div>
    </div>
  );
};

export default Logo;
