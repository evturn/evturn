import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Spinner } from './spinner';
import { Menu } from './menu';
import { Video } from './video';

ReactDOM.render(<Video />, document.getElementById('site-content'));
ReactDOM.render(<Menu />, document.getElementById('site-header'));