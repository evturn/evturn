'use strict';
import React from 'react';
import {default as __links} from 'sources/links';
import {default as Links} from 'components/links';

export default React.createClass({
  getDefaultProps() {
    return {
      links: __links
    };
  },
  render() {
    const {
      image,
      links
    } = this.props;

    return (
      <div className='backdrop animated fadeIn'>
        <Links items={links} circles={true} />
      </div>
    );
  }
});