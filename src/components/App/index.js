import React, { Component } from 'react';
import styles from './style.css';
import Router from 'components/Router';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <Router data={data} />
    );
  }
}

export default App;
