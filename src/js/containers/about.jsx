'use strict';
import React from 'react';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import { Bio } from 'components/about/bio';
import { Tech } from 'components/about/tech';
import { Stats } from 'components/about/stats';
import { default as __stats } from 'sources/stats';
import { setFeaturedTech } from 'helpers';


require('styles/pages/about.less');

export default React.createClass({
  getDefaultProps() {
    return {
      style: {
        aboutInfo: 'about-info'
      }
    };
  },
  render() {
    const { pathname } = this.props.location;
    const featured = setFeaturedTech();

    return (
      <div className="about">
        <Header />
        <Bio />
        <div className={ this.props.style.aboutInfo }>
          <Tech tech={ featured } />
          <Stats stats={ __stats } />
        </div>
        <Footer />
      </div>
    );
  }
});