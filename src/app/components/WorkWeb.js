import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import WorkWebNav from 'components/WorkWebNav';
import WorkWebDetails from 'components/WorkWebDetails';
import WorkWebCarousel from 'components/WorkWebCarousel';
import classNames from 'classnames/bind';
import css from 'less/components/work-web.less';

const cx = classNames.bind(css);

class WorkWeb extends Component {
  render() {
    const { project, nav } = this.props;

    return (
      <div>
        <div className={cx('project')}>
          <WorkWebCarousel />
          <WorkWebDetails {...project} />
        </div>
        <WorkWebNav items={nav} id={project.id} />
      </div>
    );
  }
}


WorkWeb.propTypes = {
  project: PropTypes.object,
  nav: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    project: state.slideshow.project,
    nav: state.slideshow.nav
  })
)(WorkWeb);