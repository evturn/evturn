'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { tech } from '../../models/tech';

const findTechById = (ids) => {
  const technologies = [];

  for (let id of ids) {
    technologies.push(getTech(id));
  }
  return technologies;
};

const getTech = (id) => {
  for (let t of tech) {
    if (t.id === id) {
      return t;
    }
  }
};

export const ProjectTech = React.createClass({
  render() {
    const techItems = findTechById(this.props.tech);

    return (
      <div className="project-tech project-info">
        <div className="project-tech__header project-info__header">Made with</div>
        <ul className="project-tech__list list-icons">
          {
            techItems.map((result) => {
              return (
                <li key={ result.id } className="project-tech__item list-item-icon">
                  <div className="project-tech__item-icon list-item-icon__icon"><span className={ `icon ${result.icon}` }></span></div>
                  <div className="project-tech__item-name list-item-icon__caption">{ result.technology }</div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
});