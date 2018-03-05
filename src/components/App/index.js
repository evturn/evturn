import React, { Component } from 'react';
import data from './data.json';
import { Route, Router } from 'components/Router';
import Home from 'screens/Home';
import Software from 'screens/Software';
import Work from 'screens/Work';
import Navigation from 'components/Navigation';
import styles from './style.css';

class App extends Component {
  render() {
    return (
      <Router data={data}>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/work" component={Work} />
      </Router>
    );
  }
}

export default App;
