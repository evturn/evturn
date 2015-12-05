'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { tech } from '../../models/tech';

const getNotableTech = () => {
  for (let t of tech) {
    console(t);
  }
};

const technology = 'its cool.';

export const Tech = React.createClass({
  render() {
    return (
      <div className="about-tech">
        <div className="about-info__header">Notable Tools</div>

        <ul className="about-tech__list list-icons">

          <li className="about-tech__item list-item-icon">
            <div className="about-tech__item-icon list-item-icon__icon">
              <span className="{ icon }"></span>
            </div>
            <div className="about-tech__item-name list-item-icon__caption">{ technology }</div>
          </li>

        </ul>

      </div>
    );
  }
});