import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import css from 'less/components/work-web-nav.less';

const cx = classNames.bind(css);

class WorkWebNav extends Component {
  render() {
    const { nav, id } = this.props;

    return (
      <ul className={cx('projects')}>{nav.map(item =>
        <li key={item.id} className={cx('item', {'active': item.id === id})}>
          <Link to={`/work/web/${item.id}`}>
            <img className="img" src={item.image} />
            <div className={cx('overlay')} />
          </Link>
        </li>
      )}</ul>
    );
  }
}

WorkWebNav.propTypes = {
  nav: PropTypes.array,
  id: PropTypes.number
};

export default connect(
  state => ({
    nav: state.slideshow.nav,
    id: state.slideshow.project.id
  })
)(WorkWebNav);