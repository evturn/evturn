'use strict';
import React from 'react';
import {default as Carousel} from 'components/carousel';
import {default as ProjectLinks} from 'containers/project/project-links';
import {default as ProjectTech} from 'containers/project/project-tech';
import {setProject} from 'helpers';

export default React.createClass({
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
      <div className='project'>
        <Carousel images={images} />
        <div className='project-details'>
          <div className='project-info'>
            <div className='project-title'>{name}</div>
            <div className='project-description'>{description}</div>
          </div>
          <div className='project-links'>
            <ProjectLinks items={links}/>
          </div>
        </div>
        <div className='project-tech'>
          <ProjectTech items={tech}/>
        </div>
      </div>
    );
  }
});