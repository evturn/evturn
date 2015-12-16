'use strict';
import React from 'react';
import { default as Carousel } from './carousel';
import { default as Details } from './details';
import { default as Links } from './links';
import { default as Tech } from './tech';
import { setProject } from 'helpers';

import CSSModules from 'react-css-modules';
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
    const {slug, images, name, description, links, tech} = this.state.project;

    return (
      <div className={css.root}>
        <Carousel slug={slug} images={images} />
        <Details description={description} name={name} />
        <Links links={links} />
        <Tech tech={tech} />
      </div>
    );
  }
});

export default CSSModules(Project, css);