'use strict';
import React from 'react';
import $ from 'jquery';
import { IndexLink, Link } from 'react-router';

require('styles/layout/header.less');

const HeaderNav = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <nav className="site-menu">
        <div className="site-menu__header">
          <div className="site-menu__close" onClick={ this.props.onClick }><span className="icon fa fa-times"></span></div>
        </div>
        <ul className="site-menu__list">
          <li className="site-menu__item" onClick={ this.props.onClick }><h4><IndexLink to="/" className="nav-link">Home</IndexLink></h4></li>
          <li className="site-menu__item" onClick={ this.props.onClick }><h4><Link to="work" className="nav-link">Work</Link></h4></li>
          <li className="site-menu__item" onClick={ this.props.onClick }><h4><Link to="about" className="nav-link">About</Link></h4></li>
          <li className="site-menu__item" onClick={ this.props.onClick }><h4><Link to="contact" className="nav-link">Contact</Link></h4></li>
        </ul>
      </nav>
    );
  }
});

export const Header = React.createClass({
  init() {
    this.$menuClose = $('.site-menu__close, .site-menu__item a');
    this.$menu = $('.site-menu');

    // this.$menuClose.on('click', () => this.setNavClosed());
  },
  setNavOpen(e) {
    this.$menu.addClass('open');
    this.props.body.classList.add('nav-is-opened');
    console.log(e)
  },
  setNavClosed() {
    this.$menu.removeClass('open');
    this.props.body.classList.remove('nav-is-opened');
  },
  getDefaultProps() {
    return {
      siteLogo: require('images/site/ev-av.png'),
      body: document.getElementsByTagName('body')[0]
    };
  },
  componentDidMount() {
    this.init();
  },
  render() {
    return (
      <div>
        <div className="nav-overlay" onClick={ this.setNavClosed }></div>
        <header id="site-header" className="site-header">
          <div>
            <div className="site-logo">
              <img className="site-logo__image img-scale" src={ this.props.siteLogo } />
            </div>
            <div className="site-nav site-nav__trigger" onClick={ this.setNavOpen }>
              <span className="icon fa fa-bars"></span>
            </div>
            <HeaderNav onClick={ this.setNavClosed } />
          </div>
        </header>
      </div>
    );
  }
});