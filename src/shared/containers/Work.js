import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProject } from '../actions/project';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/work.less';
import ProjectNavigation from '../components/ProjectNavigation';
import Carousel from '../components/Carousel';
import TechIcons from '../components/TechIcons';
import ProjectLinks from '../components/ProjectLinks';
import {
  TextHeader, TextTitle, TextParagraph,
  SectionContainer, PageContainer, Icon, UnorderedList, ListItem } from '../components/reuseables';

const cx = classNames.bind(styles);

class Work extends Component {
  constructor(props) {
    super(props);

    this.header = [
      {
        title: 'Web',
        icon: 'fa fa-laptop'
      },{
        title: 'iOS',
        icon: 'fa fa-mobile'
      },{
        title: 'Open Source',
        icon: 'fa fa-terminal'
      }
    ];
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
      id, links, thumbnails, mounted } = this.props;

    if (!mounted) { return <div />; }

    return (
      <div className={cx('page')}>
        <div className={cx('header')}>Work</div>
        <UnorderedList className={cx('categories')}>
          {this.header.map((item, i) => {
            return (
              <ListItem key={i} className={cx('item')}>
                <Icon className={item.icon} />
                <div className={cx('title')}>{item.title}</div>
              </ListItem>
            );
          })}
        </UnorderedList>

        <div className={cx('featured')}>
          <div className={cx('header')}>{this.renderFeaturedHeader()}</div>

          <Carousel images={slides} />

          <div className={cx('detail')}>
            <div className={cx('description')}>{description}</div>
            <div className={cx('tech')}>
              <UnorderedList>
                {tech.map((item, i) => {
                  return (
                    <ListItem key={i} className={cx('item')}>
                      <Icon className={item.icon} />
                      <div className={cx('title')}>{item.name}</div>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </div>
          </div>
        </div>

        <div className={cx('other')}>Projects</div>
        <ProjectNavigation items={thumbnails} id={id} />
      </div>
    );
  }
  renderFeaturedHeader() {
    return (
      <UnorderedList classname={cx('items')}>
        <ListItem className={cx('item', 'name')}>{this.props.name}</ListItem>
        {this.renderLinks()}
      </UnorderedList>
    );
  }
  renderLinks() {
    if (this.props.links) {
      return this.props.links.map((link, i) => {
        return (
          <ListItem key={i} classname={cx('item', 'link')}>
            <a href={link.url} target="_blank"><Icon className={link.icon} /></a>
          </ListItem>
        );
      });
    }
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