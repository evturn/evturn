'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './footer.pre';

const Footer = React.createClass({
  getInitialState() {
    return {
      page: this.props.page
    };
  },
  componentWillMount() {
    return this.setState({
      page: this.props.page
    });
  },
  componentWillReceiveProps(newProps) {
    this.setState({page: newProps.page});
  },
  render() {
    return (
      <div className={css[this.state.page]}>
        <footer className={css.footer}>
        <div className={css.blend}></div>
        <div className={css.text}>
          <span className={css.copyright}>© 2015 evturn.com built with </span>
          <span className="icon devicon-react-plain-wordmark"></span>
        </div>
        </footer>
      </div>
    );
  }
});

export default CSSModules(Footer, css);