'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Tiles} from 'components/tiles';
import styles from './work.pre';

const Thumbnails = React.createClass({
  getDefaultProps() {
    return {
      path: 'work/projects/',
      title: 'Projects'
    };
  },
  render() {
    const {
      title,
      items,
      path
    } = this.props;

    return (
      <div>
        <div styleName='header'>{title}</div>
        <Tiles
          items={items}
          path={path}
        />
      </div>
    );
  }
});

export default CSSModules(Thumbnails, styles);