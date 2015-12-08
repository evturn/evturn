'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Project } from './project';
import { Thumbnails } from './thumbnails';
import { projects } from 'sources/projects';

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