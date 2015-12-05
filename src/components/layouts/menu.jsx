'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery';

class Menu extends React.Component {
  init() {
    this.$body = $('body');
    this.$siteHeader = $('.site-header');
    this.$navTrigger = $('.site-nav__trigger');
    this.$navOverlay = $('.nav-overlay');
    this.$menuClose = $('.site-menu__close, .site-menu__item a');
    this.$menu = $('.site-menu');

    this.$navTrigger.on('click', () => this.setNavOpen());
    this.$menuClose.on('click', () => this.setNavClosed());
    this.$navOverlay.on('click', () => this.setNavClosed());
  }
  setNavOpen() {
    this.$menu.addClass('open');
    this.$body.addClass('nav-is-opened');
  }
  setNavClosed() {
    this.$menu.removeClass('open');
    this.$body.removeClass('nav-is-opened');
  }
  componentDidMount() {
    this.init();
  }
  render() {
    return (
      <div ref={(menu) => this.menu = menu}>
        <div className="site-logo">
          <img className="site-logo__image img-scale" src="../images/site/ev-av.png" />
        </div>
        <div className="site-nav site-nav__trigger"><span className="icon fa fa-bars"></span></div>
        <nav className="site-menu">
          <div className="site-menu__header">
            <div className="site-menu__close"><span className="icon fa fa-times"></span></div>
          </div>
          <div>
            <ul className="site-menu__list">
              <li className="site-menu__item"><h4><a className="nav-link" href="/">Home</a></h4></li>
              <li className="site-menu__item"><h4><a className="nav-link" href="#work">Work</a></h4></li>
              <li className="site-menu__item"><h4><a className="nav-link" href="#about">About</a></h4></li>
              <li className="site-menu__item"><h4><a className="nav-link" href="#contact">Contact</a></h4></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export { Menu }