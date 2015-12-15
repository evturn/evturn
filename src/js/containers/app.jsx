'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history';
import { default as App } from 'App';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';
import { default as Project } from 'Project';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import { Spinner } from 'components/home/spinner';
import { URL, updateLayout } from 'helpers';

require('styles/layout/header.less');
require('styles/layout/footer.less');

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
          <Spinner />
          <Header />
          { this.props.children }
          <Footer />
        </div>
    );
  }
});