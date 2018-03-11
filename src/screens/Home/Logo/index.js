import React from 'react';
import Avatar from 'shared/Avatar';
import styles from './style.css';

const Logo = props => {
  return (
    <svg 
        style={{width: '50%', height:' 50%'}}
        viewBox="50 50 300 350">
        <g>
          /* Vertices */
                  
          <polygon points="200 75,
                           50  150,
                           100 150" 
                   className={styles.s2} />
          <polygon points="200 75,
                           100 150,
                           200 150" 
                   className={styles.s3} />
          <polygon points="200 75,
                           200 150,
                           300 150" 
                   className={styles.s5} />
          <polygon points="200 75,
                           300 150,
                           350 150"
                   className={styles.s6} />

          <polyline points="200 75,
                            100 150" 
                    stroke="#ffffff"
                    strokeWidth="1" />
          <polyline points="200 75,
                            200 150" 
                    stroke="#ffffff"
                    strokeWidth="1" />
          <polyline points="200 75,
                            300 150" 
                    stroke="#ffffff"
                    strokeWidth="1" />
          /* Left Diagonal */
          <polygon points="50  150,
                           75  225,
                           50  300" 
                   className={styles.s0} />
           /* Left Diamond */
          <polygon points="100 150,
                           75  225,
                           100 300,
                           150 225,
                           100 150" 
                   className={styles.s2} />
           /* Center Diamond */
          <polygon points="200 150,
                           150 225,
                           200 300,
                           250 225,
                           200 150" 
                   className={styles.s3} />
           /* Right Diamond */
          <polygon points="300 150,
                           250 225,
                           300 300,
                           325 225,
                           300 150" 
                   className={styles.s3} />
          /* Right Diagonal */
          <polygon points="350 150,
                           300 150,
                           350 300" 
                   className={styles.s6} />
          /* Top-Left Isosceles */
          <polygon points="75  225,
                           50  150,
                           100 150" 
                   className={styles.s1}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Top-Left Pyramid */
          <polygon points="150 225,
                           100 150,
                           200 150"
                   className={styles.s2}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Top-Right Pyramid */
          <polygon points="250 225,
                           200 150,
                           300 150"
                   className={styles.s4}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Top-Right Isosceles */
          <polygon points="325 225,
                           300 150,
                           350 150" 
                   className={styles.s5}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Bottom-Left Isosceles */
          <polygon points="75  225,
                           50  300,
                           100 300" 
                   className={styles.s1}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Bottom-Left Pyramid */
          <polygon points="150 225,
                           100 300,
                           200 300" 
                   className={styles.s2}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Bottom-Right Pyramid */
          <polygon points="250 225,
                           200 300,
                           300 300" 
                   className={styles.s4}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Bottom-Right Isosceles */
          <polygon points="325 225,
                           300 300,
                           350 300"
                   className={styles.s5}
                   stroke="#ffffff"
                   strokeWidth="1" />
          /* Vertices */
          <polygon points="200 375,
                           50  300,
                           100 300" 
                   className={styles.s0} />
          <polygon points="200 375,
                           200 300,
                           100 300" 
                   className={styles.s1} />
          <polygon points="200 375,
                           300 300,
                           200 300" 
                   className={styles.s3} />
          <polygon points="200 375,
                           300 300,
                           350 300"
                   className={styles.s4} />

          <polyline points="200 375,
                            100 300" 
                    stroke="#ffffff"
                    strokeWidth="1" />
          <polyline points="200 375,
                            200 300" 
                    stroke="#ffffff"
                    strokeWidth="1" />
          <polyline points="200 375,
                            300 300" 
                    stroke="#ffffff"
                    strokeWidth="1" />


          <polyline points="50 300,
                            350 300"
                    stroke="#ffffff"
                    strokeWidth="1" />
          <polyline points="200 75,
                            50  150,
                            50  300,
                            200 375,
                            350 300,
                            350 150,
                            200 75"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1" />
        </g>
      </svg>
  );
};

export default Logo;
