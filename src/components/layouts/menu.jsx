'use strict';
import React from 'react';
import { IndexLink, Link } from 'react-router';

import CSSModules from 'react-css-modules';
import css from './menu.pre';

console.log('MENU', css);

const items = {
  home:    { name: 'Home',    route: '/'       },
  work:    { name: 'Work',    route: 'work'    },
  about:   { name: 'About',   route: 'about'   },
  contact: { name: 'Contact', route: 'contact' }
};

const Menu = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
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
    if (this.state.open !== newProps.open) {
      this.setState({ open: newProps.open });
    }
    this.setState({page: newProps.page});
  },
  render() {
    const { home, work, about, contact } = items;
    const openClass = this.state.open ? css.open : '';

    console.log('MENU STATE', this.state.open);

    return (
      <div className={`${css[this.state.page]} ${openClass}`}>
        <nav className={css.root}>
          <div className={css.header}>
            <div className={css.close} onClick={this.handleClick}><span className={`${css.icon} fa fa-times`}></span></div>
          </div>
          <ul className={css.list}>
            <li className={css.item} onClick={this.handleClick}><IndexLink to={home.route}>{home.name}</IndexLink></li>
            <li className={css.item} onClick={this.handleClick}><Link to={work.route}>{work.name}</Link></li>
            <li className={css.item} onClick={this.handleClick}><Link to={about.route}>{about.name}</Link></li>
            <li className={css.item} onClick={this.handleClick}><Link to={contact.route}>{contact.name}</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
});

export default CSSModules(Menu, css);