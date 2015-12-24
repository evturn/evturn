'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from 'styles/list.pre';

const StatItem = CSSModules(React.createClass({
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
    return {
      count: 0
    };
  },
  componentDidMount() {
    return this.increment();
  },
  componentWillUnmount() {
    return clearTimeout(this.incTimer);
  },
  render() {
    return (
      <li styleName='item-33'>
        <div styleName='number'>{this.state.count}</div>
        <div styleName='caption'>{this.props.text}</div>
      </li>
    );
  }
}), styles);

const Stats = React.createClass({
  render() {
    return (
      <div styleName='root'>
        <div styleName='header'>Statistics</div>
        <ul className='list'>
          { this.props.stats.map((result, i) => {
            return <StatItem key={i} text={result.text} number={result.number}/>;
          }) }
        </ul>
      </div>
    );
  }
 });

export default CSSModules(Stats, styles);