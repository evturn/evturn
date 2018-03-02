import React, { Component } from 'react';
import data from './data.json';
import { Route, Router } from 'components/Router';
import Home from 'screens/Home';
import Navigation from 'components/Navigation';
import styles from './style.css';

class App extends Component {
  render() {
    return (
      <Router data={data}>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/whatever" component={Home} />
      </Router>
    );
  }
}

export default App;
