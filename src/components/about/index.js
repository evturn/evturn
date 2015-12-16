'use strict';
import React from 'react';
import { default as Tech } from './tech';
import { default as Stats } from './stats';
import { default as Bio } from './bio';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';
import CSSModules from 'react-css-modules';

const p1 = 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';

const About = React.createClass({
  getDefaultProps() {
    return {
      stats: __stats,
      tech: setFeaturedTech()
    };
  },
  render() {
    return (
      <div>
        <Bio />
        <div className="info">
          <Tech tech={this.props.tech} />
          <Stats stats={this.props.stats} />
        </div>
      </div>
    );
  }
});

export default About;