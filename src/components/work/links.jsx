'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const ProjectLink = React.createClass({
  render() {
    return (
      <li className="project-links__item list-item-icon">
        <div className="list-item-icon__icon">
          <a href={ this.props.url } target="_blank">
            <span className="icon fa fa-link"></span>
          </a>
        </div>
      </li>
    );
  }
});

export const ProjectLinks = React.createClass({
  render() {
    // this.props.links.url ? <ProjectLink { this.props.links.url } />; : '';
    // this.props.links.repo ? <ProjectLink { this.props.links.repo } />; : '';
    console.log(this.props);
    return (
      <div className="project-links project-info">
        <ul className="project-links__list list-icons">
          { this.props.links.url }
          { this.props.links.repo }
        </ul>
      </div>
    );
  }
});