'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Links } from './links';
import { links } from '../../models/links';

export const Contact = React.createClass({
  render() {
    return (
      <Links contacts={ links } />
    );
  }
});