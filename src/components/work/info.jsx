'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const ProjectInfo = React.createClass({
  render() {
    return (
      <div className="project-details project-info">
        <div className="project-details__title project-info__header">{ this.props.name }</div>
        <div className="project-details__desc">{ this.props.description }</div>
      </div>
    );
  }
});