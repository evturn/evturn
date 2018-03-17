import React, { Component } from 'react';
import { Route, Router } from 'components/Router';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Head from 'components/Head';
import Navigation from 'components/Navigation';
import Software from 'screens/Software';
import Work from 'screens/Work';
import styles from './style.css';

class App extends Component {
  render() {
    return (
      <Router data={this.props.data}>
        <Head />
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
