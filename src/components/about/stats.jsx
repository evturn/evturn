'use strict';
import React from 'react';
import $ from 'jquery';

import CSSModules from 'react-css-modules';
import css from './stats.pre';

const StatItem = React.createClass({
  increment() {
    if (this.state.count >= this.props.number) {
      return this.setState({
        count: this.props.number
      });
    } else {
      setTimeout(() => {
        this.setState({
          count: this.state.count + 50
        });
        this.increment();
      }, 50);
    }
  },
  getInitialState() {
    return { count: 0 };
  },
  componentDidMount() {
    this.increment();
  },
  render() {
    return (
      <li  className={`${css.item} list-item-icon`}>
        <div className={`${css.icon} list-item-icon__icon ${css.count}`}>{this.state.count}</div>
        <div className={css.caption}>{this.props.text}</div>
      </li>
    );
  }
});

const Stats = React.createClass({
  init() {
    const counters = this.refs.stats.children;
    console.log(this.counters);
    for (let c of counters) {
      console.log(c);
    }
    this.$counters.forEach((index, element) => {
      const $el = $(element).find(css.count);
      console.log($el.val());
      $el.data('count', parseInt($el.html(), 10));
      $el.html('0');
      this.increment($el);
    });
  },
  increment($element) {
    let current = parseInt($element.html(), 10);

    current = current + 50;
    $element.html(++current);
    if (current > $element.data('count')) {
      $element.html($element.data('count'));
    } else {
      setTimeout(() => this.increment($element), 50);
    }
  },
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>Statistics</div>
        <ul className="list-icons">
          { this.props.stats.map((result, i) => {
            return <StatItem key={i} text={result.text} number={result.number}/>;
          }) }
        </ul>
      </div>
    );
  }
 });

export default CSSModules(Stats, css);