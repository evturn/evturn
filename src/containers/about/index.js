'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Tech} from './tech';
import {default as Stats} from './stats';
import {default as __stats} from 'sources/stats';
import {setFeaturedTech} from 'helpers';
import styles from './style.css';

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
        <div styleName='placeholder'>
          <img styleName='image' src={require('images/site/skel.gif')}/>
        </div>
        <div styleName='bio'>
          <div styleName='paragraph'>{bio}</div>
        </div>
        <div styleName='info'>
          <Tech items={tech} />
          <Stats items={stats} />
        </div>
      </div>
    );
  }
});

export default CSSModules(About, styles);