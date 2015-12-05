'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Links } from './links';
import { links } from '../../models/links';

export const Contact = React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <Links contacts={ links } />
    );
  }
});