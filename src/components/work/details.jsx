'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './details.pre';

const Details = React.createClass({
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>{this.props.name}</div>
        <div className={css.desc}>{this.props.description}</div>
      </div>
    );
  }
});

export default CSSModules(Details, css);