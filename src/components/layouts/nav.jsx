'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './nav.pre';

const Nav = React.createClass({
  handleClick() {
    const newState = !this.state.open;

    this.setState({ open: newState });
    this.props.callbackParent(newState);
  },
  handleLogoAnimation(props) {
    if (props.page === 'work') {
      return this.setState({ spin: true });
    } else {
      return this.setState({ spin: false });
    }
  },
  getDefaultProps() {
    return { logo: require('images/site/ev-av.png') };
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: this.props.initialOpen,
      spin: false
    };
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      this.setState({ open: newProps.open });
    }

    this.handleLogoAnimation(newProps);
    this.setState({page: newProps.page});
  },
  componentDidMount() {
    this.handleLogoAnimation(this.props);
  },
  render() {
    const spin = this.state.spin ? css.spin : '';

    return (
      <div className={css[this.state.page]}>
        <div className={css.logo}><img className={`site-logo__image img-scale ${spin}`} src={this.props.logo} /></div>
        <div className={css.burger} onClick={this.handleClick}>
            <span className="icon fa fa-bars"></span>
        </div>
      </div>
    );
  }
});

export default CSSModules(Nav, css);