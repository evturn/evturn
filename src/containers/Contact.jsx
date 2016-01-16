import React, {Component} from 'react';
import __links from 'sources/links';
import {default as IconLinks} from 'components/icon-links';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.links = __links;
  }
  render() {
    return (
      <div className='backdrop animated fadeIn'>
        <IconLinks items={this.links} classname={'circle'} />
      </div>
    );
  }
}