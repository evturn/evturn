'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import { default as __links } from 'sources/links';

require('styles/pages/contact.less');

const ContactLink = React.createClass({
  getDefaultProps() {
    return {
      style: {
        li: 'link-item list-item-icon',
        div: 'list-item-icon__icon'
      }
    }
  },
  render() {
    return (
      <li className={ this.props.style.li }>
        <div className={ this.props.style.div }>
          <a href={ this.props.url } target="_blank"><i className={`icon ${this.props.icon}`}></i></a>
        </div>
      </li>
    );
  }
});

const ContactLinks = React.createClass({
  getDefaultProps() {
    return {
      links: __links,
      style: {
        ul: 'link-items list-icons animated fadeIn'
      }
    };
  },
  render() {
    return (
      <ul className={ this.props.style.ul }>
        { this.props.links.map((result) => {
          return (<ContactLink key={ result.name } url={ result.url } icon={ result.icon } />);
        }) }
      </ul>
    );
  }
});

export default React.createClass({
  getDefaultProps() {
    return {
      style: {
        bg: {
          backgroundImage: `url(${ require('images/site/banana-plants.png') })`
        }
      }
    };
  },
  render() {
    return (
      <div style={ this.props.style.bg } className="contact">
        <Header />
        <ContactLinks />
        <Footer />
      </div>
    );
  }
});