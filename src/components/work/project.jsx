'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { ProjectCarousel } from './project-carousel';
import { ProjectInfo } from './project-info';
import { ProjectLinks } from './project-links';
import { ProjectTech } from './project-tech';


export const Project = React.createClass({
  render() {
    const { images, description, name, links, technologies } = this.props.project;

    return (
      <div className="project-content">
        <ProjectCarousel images={ images } />
        <ProjectInfo description={ description } name={ name } />
        <ProjectLinks links={ links } />
        <ProjectTech tech={ technologies } />
      </div>
    );
  }
});
