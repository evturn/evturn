'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './headline.pre';

export const Headline = React.createClass({
  render() {
    return (
      <div className={css.root}>
        <h3 className={css.name}>Evan Turner</h3>
        <h3 className={css.desc}>Web Developer</h3>
      </div>
    );
  }
});

export default CSSModules(Headline, css);