'use strict';
require('normalize.css');
require('styles/style.less');
import React from 'react';

import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import { default as Project } from 'Project';
import { default as projects } from 'sources/projects';
import { Thumbnails } from 'components/work/thumbnails';
import * as o_O from 'helpers';

export default React.createClass({
  render() {
    const { pathname } = this.props.location;
    const project = o_O.setProject(this.props.params.id);
    const projects = o_O.setFeaturedProjects();
    console.log(project);
    console.log(projects);

    return (
      <div>
        <Project project={ project } />
        <Thumbnails projects={ projects } />
      </div>
    );
  }
});