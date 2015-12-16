'use strict';
import React from 'react';
import $ from 'jquery';
import { URL } from 'helpers';

import CSSModules from 'react-css-modules';
// import styles from './style.less';

const x = 'site-spinner';

const Spinner = React.createClass({
  spin() {
    const $spinner = $(this.spinner);
    const $spinnerLogo = $(this.logo);

    $spinner.delay(1500).fadeOut(1500);
    $spinnerLogo.delay(1500).fadeOut(1500);
  },
  componentDidMount() {
    this.spin();
  },
  render() {

    return (
      <div className={ styles[x] } ref={ (spinner) => this.spinner = spinner } >
        <div className={ styles[`${x}__animation`] }></div>
        <div className={ styles[`${x}__logo`] } ref={ (logo) => this.logo = logo } >
          <img className={ styles[`${x}__logo-image img-scale`] } src={ require('images/site/ev-av.png') } />
        </div>
      </div>
    );
  }
});

export default Spinner;