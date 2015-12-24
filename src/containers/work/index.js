'use strict';
import React from 'react';
import {default as Thumbnails} from './thumbnails';
import {setFeaturedProjects} from 'helpers';

export default React.createClass({
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
      <div className='clearfix'>
        {this.props.children}
        <Thumbnails projects={this.state.projects} />
      </div>
    );
  }
});