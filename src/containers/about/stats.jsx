'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Icon} from 'components/icons/icon';
import styles from './style.css';

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
      <Icon
        text={this.state.count}
        classname={'text'}
        caption={this.props.caption}
        width={'item-33'}
      />
    );
  }
});

const Stats = React.createClass({
  getDefaultProps() {
    return {
      title: 'Statistics'
    };
  },
  getInitialState() {
    return {...this.props};
  },
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    const {
      title,
      items
    } = this.state;

    return (
      <div styleName='stats'>
        <div styleName='header'>{title}</div>
        <ul styleName='list'>
          {items.map((obj, i) => {
            return (
              <StatItem
                key={i}
                caption={obj.caption}
                number={obj.number}
              />
            );
          })}
        </ul>
      </div>
    );
  }
});

export default CSSModules(Stats, styles);