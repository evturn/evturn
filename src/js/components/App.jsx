'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';

import { setProject } from 'stores';

function matchRoute(route) {

  console.log(route);
  switch (route) {
    case '/about':
      return <About />;
    case '/contact':
      return <Contact />;
    case '/work':
      const defaultProject = setProject(4);
      console.log(defaultProject);
      return <Work project={ defaultProject } />;
    case '/work/projects/:id':
      const selectedProject = setProject(parseInt(route));
      return <Work project={ selectedProject } />;
    default:
      return <Home />;
  }
}

function updateLayout(location) {
  const { pathname } = location;
  const key = pathname.split('/')[1] || 'index';
  const el = document.getElementById('site-container');

  el.removeAttribute('class');
  el.classList.add(`page-${key}`);
}

const App = React.createClass({
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
    const { pathname } = this.props.location;
    console.log(pathname);
    const child = matchRoute(pathname);
    return (
      <div className="site-container">
        <Header />
        <div className="site-content">
          { child }
        </div>
        <Footer />
      </div>
    );
  }
});

export default connect(
  state => ({
    route: state.route,
    project: state.project }),
  { pushState }
)(App);