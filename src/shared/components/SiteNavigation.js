import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { menuVisibilty } from 'actions/site';
import SiteNavigationLinks from 'components/SiteNavigationLinks';
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
        <div className={cx(`logo-${this.props.page}`)}>
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
            <SiteNavigationLinks pages={this.props.pages} />
          </div>
        </nav>
      </header>
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