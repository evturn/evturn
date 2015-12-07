'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Carousel } from './carousel';
import { ProjectDetails } from './details';
import { projects } from '../../models/projects';

const getProject = (id=4) => {
  for (let p of projects) {
    if (p.id === parseInt(id)) {
      return p;
    }
  }
};

export const Project = React.createClass({
  render() {
    const project = getProject(this.props.id);

    return (
      <div className="project-content">
        <Carousel images={ project.images } />
        <ProjectDetails project={ project } />
      </div>
    );
  }
});
