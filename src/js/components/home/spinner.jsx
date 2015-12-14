'use strict';
import React from 'react';
import $ from 'jquery';
import { URL } from 'helpers';

require('styles/components/spinner.less');

export const Spinner = React.createClass({
  spin() {
    const $spinner = $('.site-spinner');
    const $spinnerLogo = $('.site-spinner__logo');

    $spinner.delay(1500).fadeOut(1500);
    $spinnerLogo.delay(1500).fadeOut(1500);
  },
  getInitialState() {
    return {
      isHome: false
    };
  },
  getDefaultProps() {
    return {
      style: {
        top: '15%'
      }
    };
  },
  componentDidMount() {
    if (URL.route() === '/') {
      this.setState({
        isHome: true
      });
    }
    this.spin();
  },
  render() {
    const top = this.state.isHome ? 'homepage' : '';

    return (
      <div className="site-spinner" ref={ (spinner) => this.spinner = spinner } >
        <div className={`site-spinner__animation ${ top }`}></div>
        <div className={`site-spinner__logo ${ top }`}>
          <img className="site-spinner__logo-image img-scale" src={ require('images/site/ev-av.png') } />
        </div>
      </div>
    );
  }
});