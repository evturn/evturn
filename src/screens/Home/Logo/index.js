import React from 'react';
import Avatar from 'shared/Avatar';
import styles from './style.css';

const Logo = props => {
  return (
    <div className={styles.root}>
      <div className={styles.hedron}>
        <div className={styles.vertices}>
          <div className={styles.rectangleA}>
            <div className={styles.vertexAA} />
            <div className={styles.vertexAB} />
          </div>
          <div className={styles.rectangleB}>
            <div className={styles.vertexBA} />
            <div className={styles.vertexBB} />
          </div>
        </div>
        <div className={styles.middle}> 
          <div className={styles.columnA}>
            <div className={styles.diagonalAA} />
            <div className={styles.isoscelesAA} />
            <div className={styles.isoscelesAB} />
            <div className={styles.diagonalAB} />
          </div>
          <div className={styles.columnB}> 
            <div className={styles.diagonalBA} />
            <div className={styles.pyramidBA} />
            <div className={styles.pyramidBB} />
            <div className={styles.diagonalBB} />
          </div>
          <div className={styles.columnC}> 
            <div className={styles.diagonalCA} />
            <div className={styles.pyramidCA} />
            <div className={styles.pyramidCB} />
            <div className={styles.diagonalCB} />
          </div>
          <div className={styles.columnD}>
            <div className={styles.diagonalDA} />
            <div className={styles.isoscelesDA} />
            <div className={styles.isoscelesDB} />
            <div className={styles.diagonalDB} />
          </div>
        </div>
        <div className={styles.vertices}>
          <div className={styles.rectangleC}>
            <div className={styles.vertexCA} />
            <div className={styles.edgeC} />
            <div className={styles.vertexCB} />
          </div>
          <div className={styles.rectangleD}>
            <div className={styles.vertexDA} />
            <div className={styles.edgeD} />
            <div className={styles.vertexDB} />
          </div>
        </div>
      </div>
      <div className={styles.avatar}>
        <Avatar />
      </div>
    </div>
  );
};

export default Logo;
