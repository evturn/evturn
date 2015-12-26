'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Footer = React.createClass({
  getDefaultProps() {
    return {
      text: '© 2015 evturn.com built with ',
      icon: 'devicon-react-plain-wordmark'
    };
  },
  getInitialState() {
    return {
      page: this.props.page
    };
  },
  componentWillReceiveProps(newProps) {
    this.setState({
      page: newProps.page
    });
  },
  render() {
    const {
      text,
      icon
    } = this.props;
    const {page} = this.state;
    const blend = page === 'contact' ? 'blend' : '';
    const footer = `root-${page}`;

    return (
      <footer styleName={footer}>
        <div styleName={blend}></div>
        <div styleName='text'>
          <span styleName='copyright'>{text}</span>
          <span styleName='icon' className={icon}></span>
        </div>
      </footer>
    );
  }
});

export default CSSModules(Footer, styles);