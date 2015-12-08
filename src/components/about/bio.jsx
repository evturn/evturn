'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const p1 = 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation. As a Developer, I focus on building responsive web applications that optimize scalability through RESTful APIs.';
const p2 = 'While I developing in a Node.js runtime environment, having studied Rails and the MVC architectural pattern the framework implements, I find integrating libraries like Backbone.js that share the same approach to data structure heavily strengthens the application logic I write.';

export const Bio = React.createClass({
  render() {
    return (
      <div className="bio">
        <div className="bio__header">Web Development</div>
        <div className="bio__paragraph">{ p1 }</div>
        <div className="bio__paragraph">{ p2 }</div>
      </div>
    );
  }
});