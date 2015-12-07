'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Carousel } from './carousel';
import { ProjectDetails } from './details';
import { projects } from '../../models/projects';

const getProject = (params=4) => {
  const id = parseInt(params);

  const iterateProjects = (id) => {
    for (let p of projects) {
      if (p.id === parseInt(id)) { return p; }
    }
  };

  const result = iterateProjects(id);
  if (result) { return result; }
  else { return iterateProjects(4); }
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
