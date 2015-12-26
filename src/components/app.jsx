'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, History} from 'react-router';
import {history} from 'history';
import {default as Spinner} from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import {URL, getPage} from 'helpers';
import CSSModules from 'react-css-modules';
import {css} from 'styles';

const App = React.createClass({
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
    css();
    return (
      <div>
        <Spinner/>
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </div>
    );
  }
});

export default App
// export default CSSModules(App, styles);