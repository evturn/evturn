'use strict';
require('normalize.css');
require('styles/style.less');
import React from 'react';
import { connect } from 'react-redux';

import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import { Thumbnails } from 'components/work/thumbnails';

import { setProject } from 'stores';

const Work = React.createClass({
  componentDidMount() {

  },
  render() {
    console.log('Work', this);
    const { project } = this.props.project;

    console.log('proj', project);
    console.log('this props', this.props);
    console.log('this state', this.state);

    return (
      <div>
        <div className="project-content">
          <ProjectCarousel images={ project.images } />
          <ProjectInfo name={ project.name } description={ project.description } />
          <ProjectTech tech={ project.tech } />
          <ProjectLinks links={ project.links } />
        </div>
        <Thumbnails />
      </div>
    );
  }
});

export default connect()(Work);