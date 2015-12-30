'use strict';
import React from 'react';
import {CounterItems as AboutStat} from 'components/icon-count';
import {TechItems as AboutTech} from 'components/icon-tech';
import {default as __stats} from 'sources/stats';
import {setFeaturedTech} from 'helpers';

const AboutHeader = React.createClass({
  render() {
    return <div className='about-header'>{this.props.title}</div>;
  }
});

export default React.createClass({
  getDefaultProps() {
    return {
      bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
      stats: __stats,
      tech: setFeaturedTech()
    };
  },
  getInitialState() {
    return {
      ...this.props
    };
  },
  componentDidMount() {
    return this.setState({
      ...this.props
    });
  },
  render() {
    const {bio, tech, stats} = this.state;

    return (
      <div className='about'>
        <div className='placeholder'>
          <img className='about-image' src='src/images/site/skel.gif' />
        </div>
        <div className='bio'>
        <AboutHeader title='Web Developer' />
          <div className='paragraph'>{bio}</div>
        </div>

        <div className='about-info'>
          <div className='about-tech'>
            <AboutHeader title='Notable Tools' />
            <AboutTech items={tech} width={'item-25'} />
          </div>
          <div className='about-stats'>
            <AboutHeader title='Statistics' />
            <AboutStat items={stats} width={'item-33'} />
          </div>
        </div>

      </div>
    );
  }
});