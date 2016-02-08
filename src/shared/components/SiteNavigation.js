import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { menuVisibilty } from 'actions/site';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'css/components/nav.less';

const cx = classNames.bind(styles);

class SiteNavigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const open = cx({
      'menu': true,
      'in': this.props.open,
      'out': !this.props.open
    });
    return (
      <header>
        <div
          className={cx(`logo-${this.props.page}`)}>
          <img src='src/client/assets/images/site/ev-av.png' />
        </div>
        <nav>
          <div
            className={cx(`burger-${this.props.page}`)}
            onClick={() => menuVisibilty()}>
            <FontIcon type={'fa'} name={'fa-bars'} />
          </div>
          <div className={open}>
            <div className={cx('menu-header')}>
              <div
                className={cx('menu-icon')}
                onClick={() => menuVisibilty()}>
                <FontIcon type={'fa'} name={'fa-times'} />
              </div>
            </div>
            {this.renderMenuLinks()}
          </div>
        </nav>
      </header>
    );
  }
  setPageLinks(page) {
    const {route, name, id} = page;

    switch (id) {
      case 1:
        return <IndexLink to={route}>{name}</IndexLink>;
      default:
        return <Link to={route}>{name}</Link>;
    }
  }
  renderMenuLinks() {
    return (
      <ul className={cx('flex')}>{this.props.pages.map((page, i) => {
        return (
          <li
            key={i}
            className={cx('menu-item')}
            onClick={() => menuVisibilty()}>
            {this.setPageLinks(page)}
          </li>
        );
      })}</ul>
    );
  }
}

SiteNavigation.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.array,
  open: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    page: state.site.page,
    pages: state.site.pages,
    open: state.site.open
  };
}

export default connect(mapStateToProps)(SiteNavigation);