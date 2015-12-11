'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Links } from './links';
import { links } from 'sources/links';

const Contact = React.createClass({
  render() {
    return (
      <Links contacts={ links } />
    );
  }
});

export default Contact;