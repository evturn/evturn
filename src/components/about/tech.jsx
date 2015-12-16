'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './tech.pre';

const TechItem = React.createClass({
  render() {
    return (
      <li className={`${css.item} list-item-icon`}>
        <div className={`${css.icon} list-item-icon__icon`}>
          <span className={`icon ${this.props.icon}`}></span>
        </div>
        <div className={css.caption}>{this.props.name}</div>
      </li>
    );
  }
});

const Tech = React.createClass({
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>Notable Tools</div>
        <ul className="list-icons">
          { this.props.tech.map((result) => {
              return <TechItem key={result.id} name={result.name} icon={result.icon} />;
          }) }
        </ul>
      </div>
    );
  }
});

export default CSSModules(Tech, css);