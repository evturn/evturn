'use strict';
import React from 'react';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import { Video } from 'components/home/video';
import { Headline } from 'components/home/headline';

require('styles/pages/index.less');

export default React.createClass({
  render() {
    return (
      <div className="home">
        <Header />
        <Video />
        <Headline />
        <Footer />
      </div>
    );
  }
});


