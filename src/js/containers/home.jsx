'use strict';
import React from 'react';
import { Spinner } from 'components/home/spinner';
import { Video } from 'components/home/video';
import { Headline } from 'components/home/headline';

export default React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <Spinner />
        <Video />
        <Headline />
      </div>
    );
  }
});