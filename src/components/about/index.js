'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import { default as Tech } from './tech';
import { default as Stats } from './stats';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';

import styles from './about.pre';

const About = React.createClass({
  getDefaultProps() {
    return {
      title: 'Web Developer',
      bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
      stats: __stats,
      tech: setFeaturedTech()
    };
  },
  render() {
    const {
      title,
      bio,
      tech,
      stats
    } = this.props;

    return (
      <div>
        <div styleName='bio' className='clearfix'>
          <div styleName='header'>{title}</div>
          <div styleName='paragraph'>{bio}</div>
        </div>
        <div styleName='info' className='clearfix'>
          <Tech tech={tech} />
          <Stats stats={stats} />
        </div>
      </div>
    );
  }
});

export default CSSModules(About, styles);