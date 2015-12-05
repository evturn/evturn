'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Bio } from './bio';
import { Tech } from './tech';
import { Stats } from './stats';





export const About = React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <div className="image-container animated fadeInUp"></div>
        <Bio />
        <div className="about-info">
          <Tech />
          <Stats />
        </div>
      </div>
    );
  }
});