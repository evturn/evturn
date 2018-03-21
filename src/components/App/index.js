import React, { Component } from 'react';
import { Route, Router } from 'components/Router';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Navigation from 'components/Navigation';
import Software from 'screens/Software';
import Work from 'screens/Work';
import analytics from './analytics.js';
import styles from './style.css';

class App extends Component {
  componentDidMount() {
    analytics();
  }

  render() {
    return (
      <Router data={this.props.data}>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
