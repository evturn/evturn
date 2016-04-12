import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadProject } from 'actions/slideshow';
import classNames from 'classnames/bind';
import css from 'less/containers/work.less';

const cx = classNames.bind(css);

class Work extends Component {
  componentWillMount() {
    const { params: { id }, dispatch } = this.props;

    dispatch(loadProject(id));
  }
  componentWillReceiveProps(nextProps) {
    const { params, dispatch } = this.props;
    const { params: { id } } = nextProps;

    if (params.id !== id) {
      dispatch(loadProject(id));
    }
  }
  render() {
    const { nav } = this.props;

    const workPageNav = (
      <ul className={cx('categories')}>{nav.map(item =>
        <li key={item.title} className={cx('item')}>
          <Link to={item.route} activeClassName={cx('active')}>
            <span className={item.icon} />
            <div className={cx('title')}>{item.title}</div>
          </Link>
        </li>
      )}</ul>
    );

    return (
      <div className={cx('page')}>
        {workPageNav}
        {this.props.children}
      </div>
    );
  }
}

Work.propTypes = {
  nav: PropTypes.array,
  params: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    nav: state.site.work.nav
  })
)(Work);