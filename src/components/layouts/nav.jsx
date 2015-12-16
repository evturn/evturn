'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './nav.pre';

console.log('NAV', css);

const Nav = React.createClass({
  getDefaultProps() {
    return { logo: require('images/site/ev-av.png') };
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: this.props.initialOpen
    };
  },
  handleClick() {
    const newState = !this.state.open;

    this.setState({ open: newState });
    this.props.callbackParent(newState);
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps) {
      return this.setState({
        page: newProps.page,
        open: newProps.open
      });
    }
  },
  render() {
    console.log('NAV STATE', this.state.open);
    return (
      <div className={css[this.state.page]}>
        <div className={css.logo}><img className={`site-logo__image img-scale`} src={this.props.logo} /></div>
        <div className={css.burger} onClick={this.handleClick}>
            <span className="icon fa fa-bars"></span>
        </div>
      </div>
    );
  }
});

export default CSSModules(Nav, css);