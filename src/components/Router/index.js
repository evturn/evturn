import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'screens/Home';

const Router = props => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
};

export default Router;
