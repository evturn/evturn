'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './bio.pre';

const Bio = React.createClass({
  getDefaultProps() {
    return {
      title: 'Web Developer',
      bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';
    };
  },
  render() {
    return (
      <div styleName='root'>
        <div styleName='header'>{this.props.title}</div>
        <div styleName='paragraph'>{this.props.bio}</div>
      </div>
    );
  }
});

export default CSSModules(Bio, css);