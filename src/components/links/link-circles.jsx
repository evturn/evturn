'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './link-circles.pre';

const LinkCircles = React.createClass({
  componentDidMount() {
    return this.setState({
      ...this.props
    });
  },
  render() {
    return (
      <ul styleName='list'>
        {this.props.items.map((obj, i) => {
          return (
            <li key={i} styleName='item'>
              <div styleName='icon'>
                <a href={obj.url} target="_blank">
                  <span className={obj.icon}></span>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
});

export default CSSModules(LinkCircles, styles);