'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery'
import { Spinner } from './spinner';
import { Video } from './video';
import { Headline } from './headline';

class Home extends React.Component {
  componentDidMount() {
    const $body = $('body');
    const route = window.location.href;
    const location = route.indexOf('#');
    let name;

    if (location === -1 ) {
      name = 'index';
    } else {
      name = route.substring(0, location);
    }

    $body.removeClass();
    $body.addClass(`page-${name}`);
  }
  render() {
    return (
      <div>
        <Spinner />
        <Video />
        <Headline />
      </div>
    );
  }
}

export { Home };