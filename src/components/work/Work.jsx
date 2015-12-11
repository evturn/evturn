'use strict';
require('normalize.css');
require('styles/style.less');
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import {
  ProjectCarousel,
  ProjectInfo,
  ProjectTech,
  ProjectLinks,
  Thumbnails
} from '../../views';


import {
  setProjectTech,
  setProjectLinks,
  setProjectInfo,
  setProjectImages
} from 'actions/project';

const defaultId = 4;

export const Work = React.createClass({
  loadProject(id = defaultId) {
    const queryProjects = (id) => {
      for (let project of projects) {
        if (parseInt(project.id) === parseInt(id)) {
          return project;
        }
      }
    };
    const project = queryProjects(id);
    const fallback = queryProjects(defaultId);

    if (project) { return project; }
    else { return fallback; }
  },
  render() {
    const { pathname } = this.props.location;
    const project = getProject(this.props.params.id);

    return (
      <div>
        <div className="project-content">
          <ProjectCarousel images={ images } />
          <ProjectInfo description={ description } name={ name } />
          <ProjectLinks links={ links } />
          <ProjectTech tech={ technologies } />
        </div>
        <Thumbnails />
      </div>
    );
  }
});