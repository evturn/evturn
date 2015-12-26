'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as __links} from 'sources/links';
import {default as Links} from 'components/links';
import styles from './contact.pre';

const Contact = React.createClass({
  getDefaultProps() {
    return {
      links: __links,
      image: {
        backgroundImage: `url(${require('images/site/banana-plants.png')})`
      }
    };
  },
  render() {
    const {
      image,
      links
    } = this.props;

    return (
      <div style={image} styleName='backdrop' className='animated fadeIn'>
        <Links items={links} circles{true} />
      </div>
    );
  }
});

export default CSSModules(Contact, styles);