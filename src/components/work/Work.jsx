'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Project } from './project';
import { Thumbnails } from './thumbnails';
import { projects } from 'sources/projects';
import { ProjectsActions } from 'actions/projects';

export const Work = React.createClass({
  render() {
    const { pathname } = this.props.location;
    const project = getProject(this.props.params.id);

    return (
      <div>
        <Project project={ project } />
        <Thumbnails />
      </div>
    );
  }
});