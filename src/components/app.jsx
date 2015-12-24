'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, History} from 'react-router';
import {history} from 'history';
import {default as Spinner} from 'components/spinner';
import {Header, Footer} from 'components/layouts';
import {URL, getPage} from 'helpers';
import 'styles/app.less';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      page: getPage(URL.route().substr(1))
    };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      return this.setState({
        page: getPage(URL.route().substr(1))
      });
    });
  },
  render() {
    return (
      <div>
        <Spinner page={this.state.page} />
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </div>
    );
  }
});