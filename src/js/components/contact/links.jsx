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
  componentDidMount() {
    const image = require('images/site/city-invert.png');
    this.refs['nyc'].style.backgroundImage = `url(${image})`;
  },
  render() {
    return (
      <div className="image-container animated fadeInUp" key={ 'nyc' } ref={ 'nyc' } >
        <div className="links">
          <ul className="link-items list-icons">
            {
              this.props.links.map((result) => {
                return <Link key={ result.name } data={ result } />;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});