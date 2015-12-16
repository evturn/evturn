'use strict';
import React from 'react';
import $ from 'jquery';

import CSSModules from 'react-css-modules';
import css from './stats.pre';

const Stats = React.createClass({
  init: function init() {
    this.$counters = $(css.count);
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
      <div className={css.root}>
        <div className={css.header}>Statistics</div>
        <ul className="list-icons">
          { this.props.stats.map((result) => {
            return (
              <li
                ref={(stat) => this.stat = stat}
                key={result.number}
                className={`${css.item} list-item-icon`}>
                <div className={`${css.icon} list-item-icon__icon ${css.count}`}>{result.number}</div>
                <div className={css.caption}>{result.text}</div>
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
 });

export default CSSModules(Stats, css);