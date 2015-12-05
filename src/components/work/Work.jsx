'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Project } from './project'
import { Projects } from './projects'
import { projects } from '../../models/projects';

const getProject(id) => {
  for (let p of projects) {
    if (p.id === id) {
      return p;
    }
  }
};

export const Work = React.createClass({
  render() {
    const { pathname } = this.props.location;
    const { projectId } = this.props.params;
    const activeProject = getProject(projectId);

    return (
      <div>
        <Project project={ activeProject }/>
        <Projects projects={ projects } />
      </div>
    );
  }
});