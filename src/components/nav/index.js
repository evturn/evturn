'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Nav = React.createClass({
  handleClick() {
    const newOpenState = {
      open: !this.state.open
    };

    this.setState(newOpenState);
    this.props.callbackParent(newOpenState);
  },
  getDefaultProps() {
    return {
      image: require('images/site/ev-av.png')
    };
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: this.props.initialOpen
    };
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      this.setState({
        open: newProps.open
      });
    }

    if (this.state.page !== newProps.page) {
      this.setState({
        page: newProps.page
      });
    }

  },
  render() {
    const {image} = this.props;
    const {page} = this.state;
    const logo = `logo-${page}`;
    const burger = `burger-${page}`;

    return (
      <div>
        <div styleName={logo}>
          <img className='img-scale' src={image} />
        </div>
        <div styleName={burger} onClick={this.handleClick}>
          <span className='fa fa-bars'></span>
        </div>
      </div>
    );
  }
});

export default CSSModules(Nav, styles);