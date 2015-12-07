'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { ProjectInfo } from './info';
import { ProjectLinks } from './links';
import { ProjectTech } from './tech';

export const ProjectDetails = React.createClass({
  render() {
    console.log('DETAILS', this.props);
    const { description, name, links, technologies } = this.props.project;

    return (
      <div className="project">
        <ProjectInfo description={ description } name={ name } />
        <ProjectLinks links={ links } />
        <ProjectTech tech={ technologies } />
      </div>
    );
  }
});