'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Carousel} from 'components/carousel';
import {default as ProjectLinks} from './project-links';
import {default as ProjectTech} from './project-tech';
import {setProject} from 'helpers';
import styles from './style.css';

const Project = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return setProject();
  },
  componentWillReceiveProps() {
    const props = setProject(this.props.params.projectId);
    return this.setState({...props});
  },
  componentWillMount() {
    const props = setProject(this.props.params.projectId);
    return this.setState({...props});
  },
  render() {
    const {
      images,
      name,
      description,
      links,
      tech
    } = this.state;

    return (
      <div styleName='root'>
        <Carousel images={images} />
        <div styleName='details'>
          <div styleName='info'>
            <div styleName='title'>{name}</div>
            <div styleName='description'>{description}</div>
          </div>
          <div styleName='links'>
            <ProjectLinks items={links}/>
          </div>
        </div>
        <div styleName='tech'>
          <ProjectTech items={tech}/>
        </div>
      </div>
    );
  }
});

export default CSSModules(Project, styles);