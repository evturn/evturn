import React, { Children, Component, cloneElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
export Route from './Route.js'

export class Router extends Component {
  static defaultProps = {
    data: {},
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {Children.map(this.props.children, c =>
             cloneElement(c, {data: this.props.data}))}
        </div>
      </BrowserRouter>
    );
  }
}
