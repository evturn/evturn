'use strict';
import React from 'react';
import $ from 'jquery';

require('styles/components/spinner.less');

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
      <div id="preloader" ref={ (spinner) => this.spinner = spinner }>
        <div id="spinner"></div>
        <img className="preloader" src={ require('images/favicon.jpg') } />
      </div>
    );
  }
});