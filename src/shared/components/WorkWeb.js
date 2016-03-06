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

    return (
      <div>
        <div className={cx('project')}>

          <Carousel images={slides} />

          <div className={cx('detail')}>

            <div className={cx('name')}>{name}</div>
            <div className={cx('desc')}>{description}</div>


            {links ? <ul className={cx('links')}>{links.map(link =>
              <li key={link.url} className={cx('item')}>
                <a href={link.url} target="_blank"><span className={link.icon} /></a>
                <div className={cx('title')}>{link.name}</div>
              </li>
            )}</ul> : null}

            <ul className={cx('tech')}>{tech.map(item =>
              <li key={item.name} className={cx('item')}>
                <span className={item.icon} />
                <div className={cx('title')}>{item.name}</div>
              </li>
            )}</ul>

          </div>
        </div>

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