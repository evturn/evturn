import React, {Component} from 'react';
import Carousel from 'components/Carousel';
import Thumbnails from 'components/Thumbnails';
import {WorkTech} from 'containers/work/work-tech';
import {WorkMeta} from 'containers/work/work-meta';
import AltContainer from 'alt-container';
import ProjectActions from 'actions/ProjectActions';
import ProjectStore from 'stores/ProjectStore';
import CarouselStore from 'stores/CarouselStore';

export default class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      ProjectActions.setProject(nextProps.params.id);
    }
  }
  componentWillMount() {
    ProjectActions.setProject(this.props.params.id);
  }
  render() {
    const {
      images, activeId, name,
      description, tech, links,
      thumbs
     } = ProjectStore.all();

    return (
      <AltContainer stores={[ProjectStore]}>
        <div className='work'>
          <div className='project-header'>Projects</div>
          <Thumbnails thumbs={thumbs} activeId={activeId} />
          <AltContainer stores={[CarouselStore]}>
            <Carousel images={images} />
          </AltContainer>
          <WorkMeta name={name} description={description} links={links} />
          <WorkTech items={tech} />
        </div>
      </AltContainer>
    );
  }
}