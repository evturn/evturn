import React, {Component} from 'react';
import Carousel from 'components/Carousel';
import Thumbnails from 'components/Thumbnails';
import {WorkTech} from 'containers/work/work-tech';
import {WorkMeta} from 'containers/work/work-meta';
import AltContainer from 'alt-container';
import ProjectActions from 'actions/ProjectActions';
import ProjectStore from 'stores/ProjectStore';
import CarouselStore from 'stores/CarouselStore';
import classNames from 'classnames/bind';
import styles from 'styles/containers/work.less';

const cx = classNames.bind(styles);

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
      projects
     } = ProjectStore.all();

    return (
      <AltContainer stores={[ProjectStore]}>
        <div className={cx('work')}>
          <div className={cx('project-header')}>Projects</div>
          <Thumbnails projects={projects} activeId={activeId} />
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