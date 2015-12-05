import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home/Home';
import { Menu } from './layouts/menu';

ReactDOM.render(<Home />, document.getElementById('site-content'));
ReactDOM.render(<Menu />, document.getElementById('site-header'));