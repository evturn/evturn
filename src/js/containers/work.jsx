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

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      style: {
        parent: 'page-wrapper',
        bg: {
          backgroundColor: '#ffffff'
        }

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
    const { pathname } = this.props.location;

    return (
      <div style={ this.props.style.bg } className={ this.props.style.parent} >
        { this.props.children }
        <Thumbnails projects={ this.state.projects } />
      </div>
    );
  }
});