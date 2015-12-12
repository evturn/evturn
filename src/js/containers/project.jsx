'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import * as o_O from 'helpers';

export default React.createClass({
  getInitialState() {
    return o_O.setProject(4);
  },
  componentWillReceiveProps() {
    return this.setState({ project: this.props.project });
  },
  componentWillMount() {
    return this.setState({ project: this.props.project });
  },
  render() {
    const { images, description, name, links, tech } = this.props.project;

    return (
      <div className="project-content">
        <ProjectCarousel project={ this.props.project } />
        <ProjectInfo description={ description } name={ name } />
        <ProjectLinks links={ links } />
        <ProjectTech tech={ tech } />
      </div>
    );
  }
});