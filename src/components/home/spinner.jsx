'use strict';
import React from 'react';
import $ from 'jquery';
import { URL } from 'helpers';

import CSSModules from 'react-css-modules';
import css from './spinner.pre';

const Spinner = React.createClass({
  spin() {
    $(this.spinner).delay(1500).fadeOut(1500);
    $(this.logo).delay(1500).fadeOut(1500);
  },
  getInitialState() {
    return {
      page: this.props.page === 'home' ? css.home : ''
    };
  },
  componentDidMount() {
    this.spin();
  },
  render() {
    return (
      <div className={`${css.root} ${this.state.page}`} ref={(spinner) => this.spinner = spinner}>
        <div className={css.animation}></div>
        <div className={css.logo} ref={(logo) => this.logo = logo}>
          <img className={`${css.image} img-scale`} src={require('images/site/ev-av.png')} />
        </div>
      </div>
    );
  }
});

export default CSSModules(Spinner, css);