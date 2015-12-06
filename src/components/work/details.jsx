'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { ProjectInfo } from './info';
import { ProjectLinks } from './links';
import { ProjectTech } from './tech';

export const ProjectDetails = React.createClass({
  render() {
    const { project } = this.props;
    return (
      <div className="project">
        <ProjectInfo info={ project.description, project.name } />
        <ProjectLinks links={ project.links, project.repo, project.url } />
        <ProjectTech tech={ project.technologies } />
      </div>
    );
  }
});