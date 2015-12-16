'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './tech.pre';

const Tech = React.createClass({
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>Made with</div>
        <ul className={`${css.list} list-icons`}>
          { this.props.tech.map((result) => {
            return (
              <li key={result.id} className={`${css.item} list-item-icon`}>
                <div className={`${css.icon} list-item-icon__icon`}>
                  <span className={`icon ${result.icon}`}></span>
                </div>
                <div className={css.caption}>{result.name}</div>
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
});

export default CSSModules(Tech, css);