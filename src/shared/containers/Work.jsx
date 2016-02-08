import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProject } from 'actions/project';
import AltContainer from 'alt-container';
import CarouselStore from 'stores/CarouselStore';
import Carousel from 'components/Carousel';
import Thumbnails from 'components/Thumbnails';
import TechIcons from 'components/TechIcons';
import ProjectLinks from 'components/ProjectLinks';
import classNames from 'classnames/bind';
import styles from 'css/containers/work.less';

const cx = classNames.bind(styles);

class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    setProject(this.props.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      setProject(nextProps.params.id);
    }
  }
  render() {
    const {
      slides, tech, name, links,
      description, id, thumbnails,
      mounted
     } = this.props;

     if (!mounted) { return <div />; }

    return (
      <div className={cx('work')}>
        <div className={cx('project-header')}>Projects</div>
        <Thumbnails
          thumbnails={thumbnails}
          id={id}
        />
        <AltContainer stores={[CarouselStore]}>
          <Carousel images={slides} />
        </AltContainer>
        <div className={cx('project-info')}>
          <div className={cx('project-title')}>{name}</div>
          <div className={cx('project-description')}>{description}</div>
          <ProjectLinks links={links} />
        </div>
        <div className={cx('project-tech')}>
          <div className={cx('project-title')}>Made with</div>
          <TechIcons
            items={tech}
            width={'item-20'}
          />
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  slides: PropTypes.array,
  tech: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  id: PropTypes.number,
  thumbnails: PropTypes.array,
  mounted: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    slides: state.project.slides,
    tech: state.project.tech,
    name: state.project.name,
    description: state.project.description,
    id: state.project.id,
    links: state.project.links,
    thumbnails: state.project.thumbnails,
    mounted: state.project.mounted
  }
}

export default connect(mapStateToProps)(Work);