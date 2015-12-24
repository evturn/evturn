'use strict';
import React from 'react';
import { default as __links } from 'sources/links';

import CSSModules from 'react-css-modules';
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
      <div style={image} styleName='backdrop' className='clearfix animated fadeIn'>
        <ul styleName='list'>
          {links.map((result, i) => {
            return (
              <li key={i} styleName='item'>
                <div styleName='icon'>
                  <a href={result.url} target="_blank"><span className={result.icon}></span></a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

export default CSSModules(Contact, styles);