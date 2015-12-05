'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const Link = React.createClass({
  render() {
    const { url, icon } = this.props.data;

    return (
      <li className="link-item list-item-icon">
        <div className="list-item-icon__icon">
          <a href={ url } target="_blank">
            <i className={`icon ${icon}`}></i>
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
            {
              this.props.contacts.map((result) => {
                return <Link key={ result.id } data={ result } />;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});