import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProject } from 'actions/project';
import {
  TextHeader, TextTitle, TextParagraph,
  Section, Page
 } from 'components/reuseables';
import WorkNavigation from 'components/WorkNavigation';
import Carousel from 'components/Carousel';
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
      slides, tech, name, description,
      id, links, thumbnails, mounted
     } = this.props;

     if (!mounted) { return <div />; }

    return (
      <Page>
        <TextHeader text={'Projects'} />
        <WorkNavigation items={thumbnails} id={id} />
        <Carousel images={slides} />
        <Section>
          <TextTitle text={'Projects'} text={name} />
          <TextParagraph text={description} />
          <ProjectLinks items={links} />
        </Section>
        <div className={cx('project-tech')}>
          <TextTitle text={'Projects'} text={'Made with'} />
          <TechIcons items={tech} width={'item-20'} />
        </div>
      </Page>
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