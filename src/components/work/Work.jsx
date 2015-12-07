'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Project } from './project'
import { Projects } from './projects'
import { projects } from '../../models/projects';


export const Work = React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <Project id={ this.props.params.id || 4 } />
        <Projects projects={ projects } />
      </div>
    );
  }
});