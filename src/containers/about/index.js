'use strict';
import React from 'react';
import {default as Tech} from 'containers/about/tech';
import {default as Stats} from 'containers/about/stats';
import {default as __stats} from 'sources/stats';
import {setFeaturedTech} from 'helpers';

export default React.createClass({
  getDefaultProps() {
    return {
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
      bio,
      tech,
      stats
    } = this.state;

    return (
      <div className='about'>
        <div className='placeholder'>
          <img className='about-image' src='src/images/site/skel.gif' />
        </div>
        <div className='bio'>
          <div className='paragraph'>{bio}</div>
        </div>
        <div className='about-info'>
          <Tech items={tech} />
          <Stats items={stats} />
        </div>
      </div>
    );
  }
});