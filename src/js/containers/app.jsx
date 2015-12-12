'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history'

import { default as App } from 'App';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';
import { default as Project } from 'Project';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import * as o_O from 'helpers';

const el = document.getElementById('site-container');

const updateLayout = (location) => {
  const { pathname } = location;
  const key = pathname.split('/')[1] || 'index';

  el.removeAttribute('class');
  el.classList.add(`page-${key}`);
};

export default React.createClass({
  getInitialState() {
    return {
      route: window.location.hash.substr(1)
    }
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },
  render() {
    let Child;
    updateLayout(this.props.location);

    switch (this.state.route) {
      case '/about':             Child = About; break;
      case '/contact':           Child = Contact; break;
      case '/work':              Child = Work; break;
      case '/work/projects/:id': Child = Project; break;
      default:                   Child = Home;
    }

    return (
      <div className="site-container">
        <Header />
        <div className="site-content">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
});