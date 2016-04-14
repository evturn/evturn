import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setRouteAsPage, toggleMenu } from 'actions/site';
import SiteFooter from 'components/SiteFooter';
import SiteHeader from 'components/SiteHeader';
import classNames from 'classnames/bind';
import css from 'less/components/site-header.less';
import 'less/global/style.less';
import 'db/google-analytics';

const cx = classNames.bind(css);

class App extends Component {
  componentWillMount() {
    const { dispatch, routes } = this.props;

    dispatch(setRouteAsPage(routes[1].name));
  }
  componentWillReceiveProps(nextProps) {
    const { dispatch, routes } = this.props;
    const nextPage = nextProps.routes[1].name;

    if (routes[1].name !== nextPage) {
      dispatch(setRouteAsPage(nextPage));
    }
  }
  render() {
    const { dispatch, nav, page, open } = this.props;

    return (
      <div className="site">
        <div className={cx({'overlay': open})} onClick={() => dispatch(toggleMenu())} />

        <SiteHeader open={open} page={page} nav={nav} />

        {this.props.children}

        <SiteFooter page={page} />
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.string,
  nav: PropTypes.array,
  open: PropTypes.bool,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    page: state.site.page,
    nav: state.site.nav,
    open: state.site.open,
  })
)(App);