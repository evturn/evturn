'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const Projects = React.createClass({
  render() {
    const projects = this.props.projects;
    return (
      <div>
        <div className="thumbnail__header">Projects</div>
        <ul className="thumbnails">
          {
            projects.map((result) => {
              return (
                <li key={ result.id } className="thumbnail-item">
                  <a href={`work/${ result.id }`}>
                    <div className="image-container">
                      <img className="img-scale" src={ result.thumbnail } />
                      <div className="shadow"></div>
                    </div>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});