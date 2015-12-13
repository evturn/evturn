'use strict';
import React from 'react';

export const ProjectInfo = React.createClass({
  render() {
    const { name, description } = this.props;
    return (
      <div className="project-details project-info">
        <div className="project-details__title project-info__header">{ name }</div>
        <div className="project-details__desc">{ description }</div>
      </div>
    );
  }
});