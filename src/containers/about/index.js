'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Tech} from './tech';
import {default as Stats} from './stats';
import {default as __stats} from 'sources/stats';
import {setFeaturedTech} from 'helpers';

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
  getInitialState() {
    return {...this.props};
  },
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    const {
      title,
      bio,
      tech,
      stats
    } = this.state;

    return (
      <div styleName='root'>
        <div styleName='bio' className='clearfix'>
          <div styleName='paragraph'>{bio}</div>
        </div>
        <div styleName='info' className='clearfix'>
          <Tech items={tech} />
          <Stats items={stats} />
        </div>
      </div>
    );
  }
});

export default CSSModules(About, styles);