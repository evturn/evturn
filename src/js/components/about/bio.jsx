'use strict';
import React from 'react';

const p1 = 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';

export const Bio = React.createClass({
  render() {
    return (
      <div className="bio">
        <div className="bio__header">Web Developer</div>
        <div className="bio__paragraph">{ p1 }</div>
      </div>
    );
  }
});