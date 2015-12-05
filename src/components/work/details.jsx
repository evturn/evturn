'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { ProjectInfo } from './info';
import { ProjectLinks } from './links';
import { ProjectTech } from './tech';

export const ProjectDetails = React.createClass({
  render() {
    return (
      <div className="project">
        <ProjectInfo />
        <ProjectLinks />
        <ProjectTech />
      </div>
    );
  }
});