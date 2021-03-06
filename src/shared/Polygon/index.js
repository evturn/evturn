import React from 'react';
import styles from './style.css';

const Polygon = props => {
  return (
    <svg 
      {...props}
      viewBox="50 50 300 350">
      <g className={styles.root}>
        /* Top Vertices */
        <polygon 
          points="200 50, 50  150, 100 150" 
          className={styles.s2} />
        <polygon 
          points="200 50, 100 150, 200 150" 
          className={styles.s3} />
        <polygon 
          points="200 50, 200 150, 300 150" 
          className={styles.s5} />
        <polygon 
          points="200 50, 300 150, 350 150"
          className={styles.s6} />
        <polyline 
          points="200 50, 100 150" 
          className={styles.stroke} />
        <polyline 
          points="200 50, 200 150" 
          className={styles.stroke} />
        <polyline 
          points="200 50, 300 150" 
          className={styles.stroke} />
        /* Left Diagonal */
        <polygon 
          points="50  150, 75  225, 50  300" 
          className={styles.s0} />
         /* Left Diamond */
        <polygon 
          points="100 150, 75  225, 100 300, 150 225, 100 150" 
          className={styles.s2} />
        /* Center Diamond */
        <polygon 
          points="200 150, 150 225, 200 300, 250 225, 200 150" 
          className={styles.s3} />
        /* Right Diamond */
        <polygon 
          points="300 150, 250 225, 300 300, 325 225, 300 150" 
          className={styles.s3} />
        /* Right Diagonal */
        <polygon 
          points="350 150, 300 150, 350 300" 
          className={styles.s6} />
        /* Top-Left Isosceles */
        <polygon 
          points="75  225, 50  150, 100 150" 
          className={`${styles.s1} ${styles.stroke}`} />
        /* Top-Left Pyramid */
        <polygon 
          points="150 225, 100 150, 200 150"
          className={`${styles.s2} ${styles.stroke}`} />
        /* Top-Right Pyramid */
        <polygon 
          points="250 225, 200 150, 300 150"
          className={`${styles.s4} ${styles.stroke}`} />
        /* Top-Right Isosceles */
        <polygon 
          points="325 225, 300 150, 350 150" 
          className={`${styles.s5} ${styles.stroke}`} />
        /* Bottom-Left Isosceles */
        <polygon 
          points="75  225, 50  300, 100 300" 
          className={`${styles.s1} ${styles.stroke}`} />
        /* Bottom-Left Pyramid */
        <polygon 
          points="150 225, 100 300, 200 300" 
          className={`${styles.s2} ${styles.stroke}`} />
        /* Bottom-Right Pyramid */
        <polygon 
          points="250 225, 200 300, 300 300" 
          className={`${styles.s4} ${styles.stroke}`} />
        /* Bottom-Right Isosceles */
        <polygon 
          points="325 225, 300 300, 350 300"
          className={`${styles.s5} ${styles.stroke}`} />
        /* Vertices */
        <polygon 
          points="200 400, 50  300, 100 300" 
          className={styles.s0} />
        <polygon 
          points="200 400, 200 300, 100 300" 
          className={styles.s1} />
        <polygon 
          points="200 400, 300 300, 200 300" 
          className={styles.s3} />
        <polygon 
          points="200 400, 300 300, 350 300"
          className={styles.s4} />
        <polyline 
          points="200 400, 100 300" 
          className={styles.stroke} />
        <polyline 
          points="200 400, 200 300" 
          className={styles.stroke} />
        <polyline 
          points="200 400, 300 300" 
          className={styles.stroke} />
        /* Outer border */
        <polyline 
          points="200  50, 50  150, 50  300, 200 400, 350 300, 350 150, 200 50"
          fill="none"
          className={styles.stroke} />
      </g>
    </svg>
  );
};

export default Polygon;
