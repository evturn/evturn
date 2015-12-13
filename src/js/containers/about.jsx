'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Bio } from 'components/about/bio';
import { Tech } from 'components/about/tech';
import { Stats } from 'components/about/stats';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';

export default React.createClass({
  componentDidMount() {
    const image = require('images/site/tile.png');
    this.refs['tile'].style.backgroundImage = `url(${image})`;
  },
  render() {
    const { pathname } = this.props.location;
    const featured = setFeaturedTech();

    return (
      <div>
        <div className="image-container animated fadeInUp" key={ 'tile' } ref={ 'tile' } ></div>
        <Bio />
        <div className="about-info">
          <Tech tech={ featured } />
          <Stats stats={ __stats } />
        </div>
      </div>
    );
  }
});