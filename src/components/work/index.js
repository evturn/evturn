'use strict';
import React from 'react';
import { ProjectCarousel } from './project-carousel';
import { ProjectInfo } from './project-info';
import { ProjectLinks } from './project-links';
import { ProjectTech } from './project-tech';
import { default as Project } from './project';
import { default as projects } from 'sources/projects';
import { Thumbnails } from './thumbnails';
import { setFeaturedProjects } from 'helpers';

import CSSModules from 'react-css-modules';
// import styles from './style.less';

const Work = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      style: {
        bg: { backgroundColor: '#ffffff' }
      }
    };
  },
  getInitialState() {
    return {
      projects: setFeaturedProjects()
    };
  },
  componentDidMount() {
    return this.setState({
      projects: setFeaturedProjects()
    });
  },
  render() {
    return (
      <div className="work">
        <div style={ this.props.style.bg } >
          { this.props.children }
          <Thumbnails projects={ this.state.projects } />
        </div>
    </div>
    );
  }
});

export default Work;