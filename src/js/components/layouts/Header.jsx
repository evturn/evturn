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
      routes: {
        home: '/',
        work: 'work',
        about: 'about',
        contact: 'contact'
      },
      pages : {
        home: 'Home',
        work: 'Work',
        about: 'About',
        contact: 'Contact'
      },
      style: {
        parent: 'site-menu',
        header: 'site-menu__header',
        list: 'site-menu__list',
        item: 'site-menu__item',
        closeBtn: 'site-menu__close',
        closeIcon: 'icon fa fa-times'
      }
    }
  },
  getInitialState() {
    return { open: false };
  },
  render() {
    const { style, pages, routes, onClick } = this.props;
    const isOpen = this.state.open ? 'open' : '';

    return (
      <nav className={`${ style.parent } ${ isOpen }`} >
        <div className={ style.header }>
          <div className={ style.closeBtn } onClick={ onClick }>
            <span className={ style.closeIcon }></span>
          </div>
        </div>
        <ul className={ style.list }>
          <li className={ style.item } onClick={ onClick }><IndexLink to={ routes.home }>{ pages.home }</IndexLink></li>
          <li className={ style.item } onClick={ onClick }><Link to={ routes.work }>{ pages.work }</Link></li>
          <li className={ style.item } onClick={ onClick }><Link to={ routes.about }>{ pages.about }</Link></li>
          <li className={ style.item } onClick={ onClick }><Link to={ routes.contact }>{ pages.contact }</Link></li>
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