import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import styles from '../../client/less/components/work-web.less';
import WorkWebNav from '../components/WorkWebNav';
import Carousel from './Carousel';
import { List, ListItem } from '../components/reuseables';

const cx = classNames.bind(styles);

class WorkWeb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      slides, tech, name, description,
      id, links, thumbnails, mounted } = this.props;

    if (!mounted) { return <div />; }

    return (
      <div>
        <div className={cx('featured')}>
          <div className={cx('header')}>
            <ul className={cx('project-header')}>
              <li className={cx('item', 'name')}>{name}</li>
              {links ? links.map(link =>
                <li key={link.url} className={cx('item', 'link')}>
                 <a href={link.url} target="_blank"><span className={link.icon} /></a>
                </li>
              ) : null}
            </ul>
          </div>

          <Carousel images={slides} />

          <div className={cx('detail')}>
            <div className={cx('desc')}>{description}</div>
            <div className={cx('tech')}>
              <ul className={cx('tech-list')}>{tech.map(item =>
                <ListItem key={item.name} className={cx('item')}>
                  <span className={item.icon} />
                  <div className={cx('title')}>{item.name}</div>
                </ListItem>
              )}</ul>
            </div>
          </div>
        </div>

        <div className={cx('other')}>Projects</div>
        <WorkWebNav items={thumbnails} id={id} />
      </div>
    );
  }
  renderLinks() {
    if (this.props.links) {
      return this.props.links.map(link =>
        <li key={link.icon} className={cx('item', 'link')}>
          <a href={link.url} target="_blank"><span className={link.icon} /></a>
        </li>
      );
    }
  }
}


WorkWeb.propTypes = {
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

export default connect(mapStateToProps)(WorkWeb);