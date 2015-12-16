'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import css from './bio.pre';

const p1 = 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';

const Bio = React.createClass({
  getDefaultProps() {
    return {
      title: 'Web Developer',
      bio: p1
    };
  },
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>{this.props.title}</div>
        <div className={css.paragraph}>{this.props.bio}</div>
      </div>
    );
  }
});

export default CSSModules(Bio, css);