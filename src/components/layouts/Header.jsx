'use strict';
import React from 'react';
import { IndexLink, Link } from 'react-router';
import { default as Nav } from './nav';
import { default as Menu } from './menu';


import CSSModules from 'react-css-modules';
import css from './header.pre';

console.log('HEADER', css);

const Overlay = React.createClass({
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
    if (this.state.open !== newProps.open) {
      this.setState({ open: newProps.open });
    }
    this.setState({page: newProps.page});
  },
  render() {
    const openClass = this.state.open ? css.overlay : '';

    return <div className={openClass} onClick={ this.handleClick } />;
  }
});

const Header = React.createClass({
  getInitialState() {
    return {
      page: this.props.page,
      open: false
    };
  },
  onChildChanged(newState) {
    this.setState({ open: newState });
  },
  componentWillReceiveProps(newProps) {
    this.setState({
      page: newProps.page
    });
  },
  render() {
    return (
      <div className={css[this.state.page]}>
        <Overlay initialOpen={this.state.open} open={this.state.open} callbackParent={this.onChildChanged} page={this.state.page}/>
        <header className={css.root}>
          <Nav initialOpen={this.state.open} open={this.state.open} callbackParent={this.onChildChanged} page={this.state.page}/>
          <Menu initialOpen={this.state.open} open={this.state.open} callbackParent={this.onChildChanged} page={this.state.page}/>
        </header>
      </div>
    );
  }
});

export default CSSModules(Header, css);