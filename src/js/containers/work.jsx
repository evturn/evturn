'use strict';
import React from 'react';
import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import { default as Project } from 'Project';
import { default as projects } from 'sources/projects';
import { Thumbnails } from 'components/work/thumbnails';
import { setFeaturedProjects } from 'helpers';

require('styles/pages/work.less');

export default React.createClass({
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