import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { menuVisibility } from 'actions/site';
import classNames from 'classnames/bind';
import css from 'less/components/site-header.less';

const cx = classNames.bind(css);

class SiteHeader extends Component {
  render() {
    const { dispatch, page, pages, open } = this.props;

    const toggleHeader = () => dispatch(menuVisibility());

    return (
      <header>
        {page !== 'home' ? (
          <div className={cx('navbar')}>
            <img className={cx('image')} src="dist/img/title-white.svg" />
          </div>
        ) : null}

        <div className={cx('navbar-burger', page)} onClick={toggleHeader}>
          <span className={'fa fa-bars'} />
        </div>

        <nav className={cx('menu', {'in': open, 'out': !open})}>
          <div className={cx('menu-header')}>
            <div className={cx('close')} onClick={toggleHeader}>
              <img className="img" src={require('site-images/close-light.png')} />
            </div>
          </div>

          <ul className={cx('menu-links')}>{pages.map(item =>
            <li key={item.id} className={cx('item')} onClick={toggleHeader}>
              {item.id === 1 ? (
                <IndexLink to={item.route}>{item.name}</IndexLink>
              ) : (
                <Link to={item.route}>{item.name}</Link>
              )}
            </li>
          )}</ul>

        </nav>
      </header>
    );
  }
}

SiteHeader.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.array,
  open: PropTypes.bool,
  dispatch: PropTypes.func
};

export default connect(
  state=> ({
    page: state.site.page,
    pages: state.site.pages,
    open: state.site.open
  })
)(SiteHeader);

