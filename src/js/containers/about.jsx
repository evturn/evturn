'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Bio } from 'components/about/bio';
import { Tech } from 'components/about/tech';
import { Stats } from 'components/about/stats';
import { default as __stats } from 'sources/stats';
import * as o_O from 'helpers';

export default React.createClass({
  render() {
    const { pathname } = this.props.location;
    const featured = o_O.setFeaturedTech();

    return (
      <div>
        <div className="image-container animated fadeInUp"></div>
        <Bio />
        <div className="about-info">
          <Tech tech={ featured } />
          <Stats stats={ __stats } />
        </div>
      </div>
    );
  }
});