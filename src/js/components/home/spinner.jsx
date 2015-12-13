'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery';

export const Spinner = React.createClass({
  spin() {
    const $container = $('#preloader');
    const $image = $('.preloader');

    $container.delay(500).fadeOut();
    $image.delay(600).fadeOut(600);
  },
  componentDidMount() {
    this.spin();
  },
  render() {

    return (
      <div id="preloader" ref={(spinner) => this.spinner = spinner}>
        <div id="spinner"></div>
        <img className="preloader" src={ require('images/favicon.jpg') } />
      </div>
    );
  }
});