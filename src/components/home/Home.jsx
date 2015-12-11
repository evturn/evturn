'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from './spinner';
import { Video } from './video';
import { Headline } from './headline';

const Home = React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <Spinner />
        <Video />
        <Headline />
      </div>
    );
  }
});

export default connect((state) => ({
  state
}))(Home);