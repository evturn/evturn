'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const Link = React.createClass({
  render() {
    return (
      <li className="link-item list-item-icon">
        <div className="list-item-icon__icon">
          <a href="{ this.props.url }" target="_blank">
            <i className="icon { this.props.icon }"></i>
          </a>
        </div>
      </li>
    );
  }
});

export const Links = React.createClass({
  render() {
    return (
      <div className="image-container animated fadeInUp">
        <div className="links">
          <ul className="link-items list-icons">
            { this.props.contacts.map(function(contact) {
              <Link url={ contact.url } icon={ contact.icon } />
            })}
          </ul>
        </div>
      </div>
    );
  }
});