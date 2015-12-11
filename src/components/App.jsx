'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { Home } from 'Home';
import { About } from 'About';
import { Contact } from 'Contact';
import { Work } from 'Work';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';

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
    this.updateLayout(this.props.location);
    console.log(this.props);
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