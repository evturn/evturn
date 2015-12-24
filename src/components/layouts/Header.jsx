'use strict';
import React from 'react';
import {IndexLink, Link} from 'react-router';
import {default as Menu} from 'components/menu';
import { default as Nav } from './nav';

import CSSModules from 'react-css-modules';
import styles from './header.pre';

const Overlay = CSSModules(React.createClass({
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
    const openClass = this.state.open ? 'overlay' : '';

    return <div styleName={openClass} onClick={this.handleClick} />;
  }
}), styles);

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
      <div className={styles[this.state.page]}>
        <Overlay initialOpen={this.state.open} open={this.state.open} callbackParent={this.onChildChanged} page={this.state.page}/>
        <header className='root'>
          <Nav initialOpen={this.state.open} open={this.state.open} callbackParent={this.onChildChanged} page={this.state.page}/>
          <Menu
            initialOpen={this.state.open}
            open={this.state.open}
            callbackParent={this.onChildChanged}
          />
        </header>
      </div>
    );
  }
});

export default CSSModules(Header, styles);