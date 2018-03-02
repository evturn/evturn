import React, { Children, Component, cloneElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './Route.js';
import Home from 'screens/Home';
import Navigation from 'components/Navigation';

const Routes = ({ children, data }) => {
  return (
    <div>
      {Children.map(children, c =>
         cloneElement(c, { data }))}
    </div>
  );
};

class Router extends Component {
  static defaultProps = {
    data: {},
  }

  render() {
    return (
      <BrowserRouter>
        <Routes data={this.props.data}>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/whatever" component={Home} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
