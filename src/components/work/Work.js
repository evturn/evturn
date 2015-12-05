'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const Work = React.createClass({
  render() {
    return (
      <div className="site-headline">
        <h3 className="site-headline__name">Work</h3>
        <h3 className="site-headline__desc">Web Developer</h3>
      </div>
    );
  }
});

export const Project = React.createClass({
  render() {
    const { projectId } = this.props.params;

    return (
      <div className="site-headline">
        <h3 className="site-headline__name">Project</h3>
        <h3 className="site-headline__desc">Web Developer</h3>
      </div>
    );
  }
});