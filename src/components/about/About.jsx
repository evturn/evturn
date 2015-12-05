'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const About = React.createClass({
  render() {
    return (
      <div className="site-headline">
        <h3 className="site-headline__name">Evan Turner</h3>
        <h3 className="site-headline__desc">Web Developer</h3>
      </div>
    );
  }
});