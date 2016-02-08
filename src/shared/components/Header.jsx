import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { menuVisibilty } from 'actions/site';
import SiteNavigation from 'components/SiteNavigation';
import classNames from 'classnames/bind';
import styles from 'css/components/overlay.less';

const cx = classNames.bind(styles);

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { open, page, pages } = this.props;
    return (
      <div>
        <div
          className={cx({'overlay': open})}
          onClick={() => menuVisibilty()}
        />
        <SiteNavigation
          open={open}
          page={page}
          pages={pages}
        />
      </div>
    );
  }
}

Header.propTypes = {
  page: PropTypes.string,
  open: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    page: state.site.page,
    open: state.site.open
  };
}

export default connect(mapStateToProps)(Header);