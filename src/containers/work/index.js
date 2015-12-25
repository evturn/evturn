'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Thumbnails} from './thumbnails';
import {setFeaturedProjects} from 'helpers';
import styles from './work.pre';

const Work = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      projects: setFeaturedProjects()
    };
  },
  render() {
    const {projects} = this.props;
    return (
      <div styleName='root'>
        {this.props.children}
        <Thumbnails items={projects}/>
      </div>
    );
  }
});

export default CSSModules(Work, styles);