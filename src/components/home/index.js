'use strict';
import React from 'react';
import { default as Video } from './video';
import { default as Headline } from './headline';

export default React.createClass({
  render() {
    return (
      <div>
        <Video />
        <Headline />
      </div>
    );
  }
});