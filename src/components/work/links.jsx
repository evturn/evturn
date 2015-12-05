'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const ProjectLinks = React.createClass({
  render() {
    return (
      <div className="project-links project-info">

        { if (this.props.links) {
          return (
            <ul className="project-links__list list-icons">

              { if (this.props.url) {
                return (
                  <li className="project-links__item list-item-icon">
                    <div className="list-item-icon__icon">
                      <a href={ this.props.url } target="_blank">
                        <span className="icon fa fa-link"></span>
                      </a>
                    </div>
                  </li>
              )}}

              { if (this.props.repo) {
                return (
                  <li className="project-links__item list-item-icon">
                    <div className="list-item-icon__icon">
                      <a href={ this.props.repo } target="_blank">
                        <span className="icon fa fa-github"></span>
                      </a>
                    </div>
                  </li>
              )}}

            </ul>
        )}}
      </div>
    );
  }
});