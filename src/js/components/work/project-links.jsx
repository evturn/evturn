'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const ProjectLink = React.createClass({
  render() {
    const { url, icon } = this.props.link;

    return (
      <li className="project-links__item list-item-icon">
        <div className="list-item-icon__icon">
          <a href={ url } target="_blank">
            <span className={ `icon fa  ${icon} `}></span>
          </a>
        </div>
      </li>
    );
  }
});

export const ProjectLinks = React.createClass({
  render() {
    let links;

    if (this.props.links) {
      links = (
        <ul className="project-links__list list-icons">
          { this.props.links.map((result) => {
              return <ProjectLink key={ result.url } link={ result } />;
            })}
        </ul>
      );
    } else {
      links = '';
    }
    return <div className="project-links project-info">{ links }</div>;
  }
});