'use strict';
import React from 'react';

const Link = React.createClass({
  render() {
    return (
      <li className="link-item list-item-icon">
        <div className="list-item-icon__icon">
          <a href={ this.props.url } target="_blank">
            <i className={`icon ${this.props.icon}`}></i>
          </a>
        </div>
      </li>
    );
  }
});

export const Links = React.createClass({
  render() {
    return (
      <div className="links">
        <ul className="link-items list-icons">
          { this.props.links.map((result) => {
              return <Link key={ result.name } url={ result.url } icon={ result.icon } />;
          }) }
        </ul>
      </div>
    );
  }
});