'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history';
import { Header, Footer } from 'components/layouts';
// import { default as Spinner } from 'components/home/spinner';
import { URL, updateLayout } from 'helpers';

// <Spinner />

import 'styles/app.less';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      page: URL.route(),
      route: URL.route()
    };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      return this.setState({
        page: URL.route(),
        child: URL.child(),
        projectId: URL.params()
      });
    });
  },
  render() {
  const { pathname } = this.props.location;
  const page = pathname.split('/')[1] || 'home';

    return (
        <div className={ `site-container ${ page }` }>
          <Header page={ page } />
          { this.props.children }
          <Footer page={ page } />
        </div>
    );
  }
});