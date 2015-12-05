'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery'
import { Spinner } from './spinner';
import { Video } from './video';
import { Headline } from './headline';

export const Home = React.createClass({
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