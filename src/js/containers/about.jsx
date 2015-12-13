'use strict';
import React from 'react';
import { Bio } from 'components/about/bio';
import { Tech } from 'components/about/tech';
import { Stats } from 'components/about/stats';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';

export default React.createClass({
  render() {
    const { pathname } = this.props.location;
    const featured = setFeaturedTech();

    return (
      <div className="about">
        <Bio />
        <div className="about-info">
          <Tech tech={ featured } />
          <Stats stats={ __stats } />
        </div>
      </div>
    );
  }
});