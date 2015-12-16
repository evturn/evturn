'use strict';
import React from 'react';
import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import { setProject } from 'helpers';

import CSSModules from 'react-css-modules';
// import styles from './style.less';

const Project = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return setProject();
  },
  componentWillReceiveProps() {
    return this.setState({
      project: setProject(this.props.params.projectId)
    });
  },
  componentWillMount() {
    return this.setState({
      project: setProject(this.props.params.projectId)
    });
  },
  render() {
    const {slug, images, name, description, links, tech} = this.state.project;
    return (
      <div className="project-content">
        <ProjectCarousel slug={ slug } images={ images } />
        <ProjectInfo description={ description } name={ name } />
        <ProjectLinks links={ links } />
        <ProjectTech tech={ tech } />
      </div>
    );
  }
});

export default Project;