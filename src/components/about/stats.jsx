'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { stats } from '../../models/stats';


const number = 70000;
const text = 'food';

export const Stats = React.createClass({
  render() {
    return (
      <div className="about-stats">
        <div className="about-info__header">Statistics</div>

        <ul className="about-stats__list list-icons">

          <li className="about-stats__item list-item-icon">
            <div className="about-stats__item-icon list-item-icon__icon stat-count">{ number }</div>
            <div className="about-stats__item-name list-item-icon__caption">{ text }</div>
          </li>

        </ul>

      </div>
    );
  }
 });