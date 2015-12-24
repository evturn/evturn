'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './overlay.pre';

const Overlay = React.createClass({
  getInitialState() {
    return {
      open: this.props.initialOpen
    };
  },
  handleClick() {
    const newOpenState = {
      open: !this.state.open
    };

    this.setState(newOpenState);
    this.props.callbackParent(newOpenState);
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      this.setState({
        open: newProps.open
      });
    }
  },
  render() {
    const openClass = this.state.open ? 'overlay' : '';

    return <div styleName={openClass} onClick={this.handleClick} />;
  }
});

export default CSSModules(Overlay, styles);