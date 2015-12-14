'use strict';
import React from 'react';

export const Footer = React.createClass({
  render() {
    return (
      <footer className="site-footer">
      <div className="blend"></div>
      <div className="site-footer__text">
        <span className="site-footer__copyright">© 2015 evturn.com built with </span>
        <span className="icon devicon-react-plain-wordmark"></span>
      </div>
      </footer>
    );
  }
});