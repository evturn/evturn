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
          /* Left Diagonal */
          <polygon points="50  150,
                           75  225,
                           50  300" 
                   className={styles.s0} />
          /* Top-Left Isosceles */
          <polygon points="75  225,
                           50  150,
                           100 150" 
                   className={styles.s1} />
          /* Top-Left Pyramid */
          <polygon points="150 225,
                           100 150,
                           200 150"
                   className={styles.s2} />
          /* Left-Outer-Left Diagonal */
          <polygon points="100 150,
                           75  225,
                           100 300" 
                   className={styles.s3} />
          /* Left-Outer-Right Diagonal */
          <polygon points="100 150,
                           150 225,
                           100 300" 
                   className={styles.s3} />
          /* Inner-Left Diagonal */
          <polygon points="200 150,
                           200 300,
                           100 300" 
                   className={styles.s3} />
          /* Inner-Right Diagonal */
          <polygon points="200 150,
                           250 225,
                           200 300" 
                   className={styles.s3} />
          /* Right-Outer-Left Diagonal */
          <polygon points="300 150,
                           250 225,
                           300 300" 
                   className={styles.s3} />
          /* Right-Outer-Right Diagonal */
          <polygon points="350 150,
                           300 150,
                           300 300" 
                   className={styles.s3} />
          /* Right Diagonal */
          <polygon points="350 150,
                           300 150,
                           350 300" 
                   className={styles.s6} />
          /* Top-Right Pyramid */
          <polygon points="250 225,
                           200 150,
                           300 150"
                   className={styles.s4} />
          /* Top-Right Isosceles */
          <polygon points="325 225,
                           300 150,
                           350 150" 
                   className={styles.s5} />
          /* Bottom-Left Isosceles */
          <polygon points="75  225,
                           50  300,
                           100 300" 
                   className={styles.s1} />
          /* Bottom-Left Pyramid */
          <polygon points="150 225,
                           100 300,
                           200 300" 
                   className={styles.s2} />
          /* Bottom-Right Pyramid */
          <polygon points="250 225,
                           200 300,
                           300 300" 
                   className={styles.s4} />
          /* Bottom-Right Isosceles */
          <polygon points="325 225,
                           300 300,
                           350 300"
                   className={styles.s5} />
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
        </g>
      </svg>
  );
};

/*
                                          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
 .vertices                               |                             |
     .rectangleA .edge     .vertex       |           . //\\.           |
     .rectangleB .edge     .vertex       |       . ' ///...\\\         |
                                         |   . '   /////.....\\\\      | 
 .middle                                 |  '.....//////.......\\\\\   |
     .columnA    .diagonal .isosceles    |  |\\// \\\/// \\\/// \\//|  |
     .columnB    .diagonal .pyramid      |  | \/   \\//   \\//   \/ |  |
     .columnC    .diagonal .pyramid      |  | /\   //\\   //\\   /\ |  |
     .columnD    .diagonal .isosceles    |  |//\\ ///\\\ ///\\\ //\\|  |
                                         |  '\\\\\'''''''//////'''''.  |
 .vertices                               |      \\\\'''''/////    .'   |
     .rectangleC .edge     .vertex       |         \\\'''///   .'      |
     .rectangleD .edge     .vertex       |             \\// .'         |
                                         |                             |
                                         | _ _ _ _ _ _ _ _ _ _ _ _ _ _ |

*/
// const Logo = props => {
//   return (
//     <div className={styles.root}>
//       <div className={styles.hedron}>
//         <div className={styles.vertices}>
//           <div className={styles.rectangleA}>
//             <div className={styles.vertexAA} />
//             <div className={styles.edgeA} />
//             <div className={styles.vertexAB} />
//           </div>
//           <div className={styles.rectangleB}>
//             <div className={styles.vertexBA} />
//             <div className={styles.edgeB} />
//             <div className={styles.vertexBB} />
//           </div>
//         </div>
//         <div className={styles.middle}> 
//           <div className={styles.columnA}>
//             <div className={styles.diagonalAA} />
//             <div className={styles.isoscelesAA} />
//             <div className={styles.isoscelesAB} />
//             <div className={styles.diagonalAB} />
//           </div>
//           <div className={styles.columnB}> 
//             <div className={styles.diagonalBA} />
//             <div className={styles.pyramidBA} />
//             <div className={styles.pyramidBB} />
//             <div className={styles.diagonalBB} />
//           </div>
//           <div className={styles.columnC}> 
//             <div className={styles.diagonalCA} />
//             <div className={styles.pyramidCA} />
//             <div className={styles.pyramidCB} />
//             <div className={styles.diagonalCB} />
//           </div>
//           <div className={styles.columnD}>
//             <div className={styles.diagonalDA} />
//             <div className={styles.isoscelesDA} />
//             <div className={styles.isoscelesDB} />
//             <div className={styles.diagonalDB} />
//           </div>
//         </div>
//         <div className={styles.vertices}>
//           <div className={styles.rectangleC}>
//             <div className={styles.vertexCA} />
//             <div className={styles.edgeC} />
//             <div className={styles.vertexCB} />
//           </div>
//           <div className={styles.rectangleD}>
//             <div className={styles.vertexDA} />
//             <div className={styles.edgeD} />
//             <div className={styles.vertexDB} />
//           </div>
//         </div>
//       </div>
//       <div className={styles.avatar}>
//       </div>
//     </div>
//   );
// };

export default Logo;
