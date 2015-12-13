'use strict';
import React from 'react';

const TechItem = React.createClass({
  render() {
    const { name, icon } = this.props.data;

    return (
      <li className="about-tech__item list-item-icon">
        <div className="about-tech__item-icon list-item-icon__icon">
          <span className={`icon ${icon} `}></span>
        </div>
        <div className="about-tech__item-name list-item-icon__caption">{ name }</div>
      </li>
    );
  }
});

export const Tech = React.createClass({
  render() {
    return (
      <div className="about-tech">
        <div className="about-info__header">Notable Tools</div>
        <ul className="about-tech__list list-icons">
          { this.props.tech.map((result) => {
              return <TechItem key={ result.id }  data={ result } />;
          }) }
        </ul>
      </div>
    );
  }
});