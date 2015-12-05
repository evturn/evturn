'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery';
import { stats } from '../../models/stats';

export const Stats = React.createClass({
  init: function init() {
    this.$counters = $('.stat-count');
    this.animate();
  },
  increment: function increment($element) {
    let current = parseInt($element.html(), 10);

    current = current + 50;
    $element.html(++current);
    if (current > $element.data('count')) {
      $element.html($element.data('count'));
    } else {
      setTimeout(() => this.increment($element), 50);
    }
  },
  animate: function animate() {
    this.$counters.each((index, element) => {
      const $element = $(element);

      $element.data('count', parseInt($element.html(), 10));
      $element.html('0');
      this.increment($element);
    });
  },
  componentDidMount() {
    this.init();
  },
  render() {
    return (
      <div className="about-stats">
        <div className="about-info__header">Statistics</div>
        <ul className="about-stats__list list-icons">
          {
            (stats).map((result) => {
              return (
                <li
                ref={ (stat) => this.stat = stat }
                key={ result.number }
                className="about-stats__item list-item-icon">
                  <div className="about-stats__item-icon list-item-icon__icon stat-count">{ result.number }</div>
                  <div className="about-stats__item-name list-item-icon__caption">{ result.text }</div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
 });