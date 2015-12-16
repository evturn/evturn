'use strict';
import React from 'react';
import { default as Thumbnails } from './thumbnails';
import { setFeaturedProjects } from 'helpers';

const Work = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      projects: setFeaturedProjects()
    };
  },
  render() {
    return (
      <div>
        { this.props.children }
        <Thumbnails projects={this.state.projects} />
      </div>
    );
  }
});

export default Work;