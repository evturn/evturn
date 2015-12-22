'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './stats.pre';

const StatItem = React.createClass({
  increment() {
    if (this.state.count >= this.props.number) {
      return this.setState({
        count: this.props.number
      });
    } else {
      this.incTimer = setTimeout(() => {
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
  componentWillUnmount() {
    return clearTimeout(this.incTimer);
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