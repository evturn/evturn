'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Carousel } from './carousel';
import { ProjectDetails } from './details';
import { projects } from '../../models/projects';

const getProject = (id=4) => {
  for (let p of projects) {
    if (p.id === id) {
      return p;
    }
  }
};

export const Project = React.createClass({
  render() {
    const project = getProject(4);
    const images = project.images;
    return (
      <div className="project-content">
        <Carousel images={ images } />
        <ProjectDetails project={ project } />
      </div>
    );
  }
});