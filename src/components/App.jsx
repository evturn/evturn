'use strict';
import React from 'react';
import {
  Home,
  Work,
  About,
  Project,
  Contact,
  Footer,
  Header } from '../views';


export const App = React.createClass({
  updateLayout(location) {
    const { pathname } = location;
    const key = pathname.split('/')[1] || 'index';
    const el = document.getElementById('site-container');

    el.removeAttribute('class');
    el.classList.add(`page-${key}`);
  },
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

    this.updateLayout(this.props.location);
    switch (this.state.route) {
      case '/about':
        Child = About;
        break;
      case '/contact':
        Child = Contact;
        break;
      case '/work':
        Child = Work;
        break;
      case '/work/projects/:id':
        Child = Project;
        break;
      default:
        Child = Home;
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