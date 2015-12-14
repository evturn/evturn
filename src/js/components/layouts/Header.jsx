'use strict';
import React from 'react';
import { IndexLink, Link } from 'react-router';

require('styles/layout/header.less');

const HeaderNav = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      style: {
        item: 'site-menu__item'
      }
    }
  },
  getInitialState() {
    return { open: false };
  },
  render() {
    return (
      <nav className={`site-menu ${ this.state.open ? 'open' : '' }`} >
        <div className="site-menu__header">
          <div className="site-menu__close" onClick={ this.props.onClick }>
            <span className="icon fa fa-times"></span>
          </div>
        </div>
        <ul className="site-menu__list">
          <li className={ this.props.style.item } onClick={ this.props.onClick }><IndexLink to="/">Home</IndexLink></li>
          <li className={ this.props.style.item } onClick={ this.props.onClick }><Link to="work">Work</Link></li>
          <li className={ this.props.style.item } onClick={ this.props.onClick }><Link to="about">About</Link></li>
          <li className={ this.props.style.item } onClick={ this.props.onClick }><Link to="contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
});

export const Header = React.createClass({
  setNavOpen(e) {
    this.refs.menu.setState({ open: true });
    this.props.body.classList.add('nav-is-opened');
  },
  setNavClosed() {
    this.refs.menu.setState({ open: false });
    this.props.body.classList.remove('nav-is-opened');
  },
  getDefaultProps() {
    return {
      siteLogo: require('images/site/ev-av.png'),
      body: document.getElementsByTagName('body')[0]
    };
  },
  render() {
    return (
      <div>
        <div className="nav-overlay" onClick={ this.setNavClosed }></div>
        <header className="site-header">
          <div>
            <div className="site-logo">
              <img className="site-logo__image img-scale" src={ this.props.siteLogo } />
            </div>
            <div className="site-nav site-nav__trigger" onClick={ this.setNavOpen }>
              <span className="icon fa fa-bars"></span>
            </div>
            <HeaderNav ref={ 'menu' } onClick={ this.setNavClosed } />
          </div>
        </header>
      </div>
    );
  }
});