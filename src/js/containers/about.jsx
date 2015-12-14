'use strict';
import React from 'react';
import { Bio } from 'components/about/bio';
import { Tech } from 'components/about/tech';
import { Stats } from 'components/about/stats';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';

export default React.createClass({
  getDefaultProps() {
    return {
      style: {
        parent: 'about',
        bg: {
          backgroundColor: '#ffffff'
        },
        aboutInfo: 'about-info'
      }
    };
  },
  render() {
    const { pathname } = this.props.location;
    const featured = setFeaturedTech();

    return (
      <div style={ this.props.style.bg } className={ this.props.style.parent }>
        <Bio />
        <div className={ this.props.style.aboutInfo }>
          <Tech tech={ featured } />
          <Stats stats={ __stats } />
        </div>
      </div>
    );
  }
});