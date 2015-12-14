'use strict';
import React from 'react';
import { Video } from 'components/home/video';
import { Headline } from 'components/home/headline';

export default React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <Video />
        <Headline />
      </div>
    );
  }
});