'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { tech } from '../../models/tech';

/**
 * Helper
 *
 * Return technologies where { featured: true }
 */

const getFeatured = (tech) => {
  const featured = [];

  for (let obj of tech) {
    obj.featured ? featured.push(obj) : '';
  }
  return featured;
};

/**
 * Child
 *
 * Technology Item
 */

const TechItem = React.createClass({
  render() {
    const { technology, icon } = this.props.data;

    return (
      <li className="about-tech__item list-item-icon">
        <div className="about-tech__item-icon list-item-icon__icon">
          <span className={`icon ${icon} `}></span>
        </div>
        <div className="about-tech__item-name list-item-icon__caption">{ technology }</div>
      </li>
    );
  }
});

/**
 * Parent
 *
 * Technologies
 */

export const Tech = React.createClass({
  render() {
    return (
      <div className="about-tech">
        <div className="about-info__header">Notable Tools</div>
        <ul className="about-tech__list list-icons">
          {
            getFeatured(tech).map((result) => {
              return <TechItem key={ result.id }  data={ result } />;
            })
          }
        </ul>
      </div>
    );
  }
});