'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import * as $ from 'helpers';

export default React.createClass({
  getInitialState() {
    return $.setProject();
  },
  componentWillReceiveProps() {
    return this.setState({
      project: $.setProject(this.props.params.projectId)
    });
  },
  componentWillMount() {
    return this.setState({
      project: $.setProject(this.props.params.projectId)
    });
  },
  render() {
    return (
      <div className="project-content">
        <ProjectCarousel images={ this.state.project.images } />
        <ProjectInfo description={ this.state.project.description } name={ this.state.project.name } />
        <ProjectLinks links={ this.state.project.links } />
        <ProjectTech tech={ this.state.project.tech } />
      </div>
    );
  }
});