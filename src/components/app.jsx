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
    const route = URL.route().substr(1);

    return { page: route === "" ? 'home' : route };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = URL.route().substr(1);

      return this.setState({
        page: route === "" ? 'home' : route
      });
    });
  },
  render() {
    return (
        <div>
          <Header page={this.state.page} />
          { this.props.children }
          <Footer page={this.state.page} />
        </div>
    );
  }
});