'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div>
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