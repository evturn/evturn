'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from 'styles/list.pre';

const Tech = React.createClass({
  getDefaultProps() {
    return {
      title: 'Notable Tools'
    };
  },
  render() {
    return (
      <div styleName='root'>
        <div styleName='header'>{this.props.title}</div>
        <ul styleName='list'>
          {this.props.tech.map((result, i) => {
            return (
              <li styleName='item-25'>
                <div styleName='tech-icon'><span className={result.icon}></span></div>
                <div styleName='caption'>{result.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

export default CSSModules(Tech, styles);