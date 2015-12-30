'use strict';
import React from 'react';
import {default as Tiles} from 'components/tiles';

export default React.createClass({
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
        <div className='work-header'>{title}</div>
        <Tiles
          items={items}
          path={path}
        />
      </div>
    );
  }
});