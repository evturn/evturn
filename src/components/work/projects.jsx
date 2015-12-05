'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const Projects = React.createClass({
  render() {
    return (
      <div>
        <div className="thumbnail__header">Projects</div>
        <ul className="thumbnails">
          {
            (this.props.projects).map((result) => {
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