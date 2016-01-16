import React, {Component} from 'react';
import Carousel from 'components/Carousel';
import Thumbnails from 'components/Thumbnails';
import TechIcons from 'components/TechIcons';
import IconLinks from 'components/icon-links';
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

    this.techTitle = 'Made with';
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
          <div className={cx('project-info')}>
            <div className={cx('project-title')}>{name}</div>
            <div className={cx('project-description')}>{description}</div>
            {links ? this.renderLinks(links) : null}
          </div>
          <div className={cx('project-tech')}>
            <div className={cx('project-title')}>{this.techTitle}</div>
            <TechIcons items={tech} width={'item-25'} />
          </div>
        </div>
      </AltContainer>
    );
  }
  renderLinks(links) {
    return <div className={cx('project-links')}><IconLinks items={links} classname={'square'} /></div>;
  }
}