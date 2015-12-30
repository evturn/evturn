'use strict';
import React from 'react';
import {default as Spinner} from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import {URL, getPage} from 'helpers';
import 'styles/style.less';

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
        <Spinner/>
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </div>
    );
  }
});