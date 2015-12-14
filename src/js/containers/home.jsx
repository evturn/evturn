'use strict';
import React from 'react';
import { Video } from 'components/home/video';
import { Headline } from 'components/home/headline';

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