'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Carousel} from 'components/carousel';
import { default as Links } from './links';
import { default as Tech } from './tech';
import {setProject} from 'helpers';

import css from './project.pre';

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
    const {
      images,
      name,
      description,
      links,
      tech
    } = this.state.project;

    return (
      <div styleName='root'>
        <Carousel images={images} />
        <div styleName='details'>
          <div styleName='title'>{name}</div>
          <div styleName='description'>{description}</div>
        </div>
        <Links links={links} />
        <Tech tech={tech} />
      </div>
    );
  }
});

export default CSSModules(Project, css);