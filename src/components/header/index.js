'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as Menu} from 'components/menu';
import {default as Overlay} from 'components/overlay';
import {default as Nav} from 'components/nav';
import styles from './header.pre';

const Header = React.createClass({
  getInitialState() {
    return {
      page: this.props.page,
      open: false
    };
  },
  onChildChanged(newOpenState) {
    return this.setState(newOpenState);
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      page: newProps.page
    });
  },
  componentDidMount() {
    return this.setState({
      page: this.props.page
    });
  },
  render() {
    const {
      page,
      open
    } = this.state;

    return (
      <div>
        <Overlay
          initialOpen={open}
          open={open}
          callbackParent={this.onChildChanged}
        />
        <header>
          <Nav
            initialOpen={open}
            open={open}
            callbackParent={this.onChildChanged}
            page={page}
          />
          <Menu
            initialOpen={open}
            open={open}
            callbackParent={this.onChildChanged}
          />
        </header>
      </div>
    );
  }
});

export default CSSModules(Header, styles);