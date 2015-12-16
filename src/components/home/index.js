'use strict';
import React from 'react';
import { Video } from './video';

import CSSModules from 'react-css-modules';
// import styles from './style.less';

const Home = React.createClass({
  render() {
    return (
      <div>
        <Video />
        <div className="site-headline">
          <h3 className="site-headline__name">Evan Turner</h3>
          <h3 className="site-headline__desc">Web Developer</h3>
        </div>
      </div>
    );
  }
});

export default Home;