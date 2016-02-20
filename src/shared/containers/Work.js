import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProject } from '../actions/project';
import classNames from 'classnames/bind';
import styles from '../../client/assets/less/containers/work.less';
import ProjectNavigation from '../components/ProjectNavigation';
import Carousel from '../components/Carousel';
import TechIcons from '../components/TechIcons';
import ProjectLinks from '../components/ProjectLinks';
import {
  TextHeader, TextTitle, TextParagraph,
  SectionContainer, PageContainer
 } from '../components/reuseables';

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

     console.log(this);

     if (!mounted) { return <div />; }

    return (
      <PageContainer>
        <TextHeader text={'Projects'} />
        <ProjectNavigation items={thumbnails} id={id} />
        <Carousel images={slides} />
        <SectionContainer>
          <TextTitle text={name} />
          <TextParagraph text={description} />
          <ProjectLinks items={links} />
        </SectionContainer>
        <SectionContainer>
          <TextTitle text={'Made with'} />
          <TechIcons items={tech} width={'20%'} />
        </SectionContainer>
      </PageContainer>
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
    slides: state.work.project.slides,
    tech: state.work.project.tech,
    name: state.work.project.name,
    description: state.work.project.description,
    id: state.work.project.id,
    links: state.work.project.links,
    thumbnails: state.work.projectsNav,
    mounted: state.work.mounted
  }
}

export default connect(mapStateToProps)(Work);