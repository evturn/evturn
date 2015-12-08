'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history'
import { Home } from './home/Home';
import { Work } from './work/Work';
import { Project } from './work/project';
import { Contact } from './contact/Contact';
import { About } from './about/About';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';

const updateLayout = (location) => {
  const { pathname } = location;
  const key = pathname.split('/')[1] || 'index';

  el.removeAttribute('class');
  el.classList.add(`page-${key}`);
};

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
    let Child;

    updateLayout(this.props.location);
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

ReactDOM.render((
  <Router >
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="work" component={ Work } >
        <Route path="projects(/:id)" component={ Project } />
      </Route>
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('site-container'));