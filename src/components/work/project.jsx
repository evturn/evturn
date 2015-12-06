'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Carousel } from './carousel';
import { ProjectDetails } from './details';

export const Project = React.createClass({
  render() {
    return (
      <div className="project-content">
        <Carousel images={ this.props.project.images }/>
        <ProjectDetails project={ this.props.project } />
      </div>
    );
  }
});