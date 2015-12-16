'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { default as __links } from 'sources/links';

import CSSModules from 'react-css-modules';
import css from './contact.pre';
import 'styles/typography/animate.less';

css.backgroundImage = {
  backgroundImage: `url(${ require('images/site/banana-plants.png') })`
};

const ContactLink = React.createClass({
  render() {
    return (
      <li className={`${css.item} list-item-icon`}>
        <div className={css[`item-icon`]}>
          <a href={ this.props.url } target="_blank"><i className={`${css.icon} ${this.props.icon}`}></i></a>
        </div>
      </li>
    );
  }
});

const ContactLinks = React.createClass({
  getDefaultProps() {
    return {
      links: __links,
    };
  },
  render() {
    return (
      <ul className={css.items}>
        { this.props.links.map((result) => {
          return (<ContactLink key={ result.name } url={ result.url } icon={ result.icon } />);
        }) }
      </ul>
    );
  }
});

const Contact = React.createClass({
  render() {
    return (
      <div style={css.backgroundImage} className={`${css.backdrop} animated fadeIn`}>
        <ContactLinks />
      </div>
    );
  }
});

export default CSSModules(Contact, css);