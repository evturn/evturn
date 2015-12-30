'use strict';
import React from 'react';
import {default as Thumbnails} from 'containers/work/thumbnails';
import {setFeaturedProjects} from 'helpers';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      projects: setFeaturedProjects()
    };
  },
  render() {
    const {projects} = this.props;

    return (
      <div className='work'>
        {this.props.children}
        <Thumbnails items={projects}/>
      </div>
    );
  }
});