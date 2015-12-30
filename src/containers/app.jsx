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
  getPage() {
    return this.props.params.id ? 'work' : getPage(URL.route().substr(1));
  },
  getInitialState() {
    return {
      page: this.getPage()
    };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      return this.setState({
        page: this.getPage()
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