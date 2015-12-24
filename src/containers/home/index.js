'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as __videos} from 'sources/videos';
import {default as Video} from 'components/video';

import styles from './home.pre';

const Home = React.createClass({
  getDefaultProps() {
    return {
      title: 'Evan Turner',
      description: 'Web Developer',
      video: __videos
    };
  },
  render() {
    const {
      title,
      description,
      videos
    } = this.props;

    return (
      <div styleName='root'>
        <Video playlist={__videos} />
        <div styleName='banner'>
          <h3 styleName='title'>{title}</h3>
          <h3 styleName='description'>{description}</h3>
        </div>
      </div>
    );
  }
});

export default CSSModules(Home, styles);