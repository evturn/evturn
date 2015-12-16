'use strict';
import React from 'react';
import { Tech } from 'components/about/tech';
import { Stats } from 'components/about/stats';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';
import CSSModules from 'react-css-modules';
// import styles from './style.less';

const p1 = 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';

const About = React.createClass({
  getDefaultProps() {
    return {
      stats: __stats,
      tech: setFeaturedTech()
    };
  },
  render() {
    const { styles } = this.props;
    console.log(this);
    return (
      <div>
        <div className={styles.bio}>
          <div className={styles.bio__header}>Web Developer</div>
          <div className={styles.bio__paragraph}>{ p1 }</div>
        </div>
        <div className={ styles['about-info'] }>
          <Tech tech={ tech } />
          <Stats stats={ stats } />
        </div>
      </div>
    );
  }
});

export default About;