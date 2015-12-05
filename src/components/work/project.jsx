'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Carousel } from './carousel';
import { ProjectDetails } from './details';

export const Project = React.createClass({
  render() {
    const { projectId } = this.props.params;

    return (
      <div className="project-content">
        <Carousel />
        <ProjectDetails />
      </div>
    );
  }
});