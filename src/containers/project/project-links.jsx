'use strict';
import React from 'react';
import {default as LinkBoxes} from 'components/links/link-boxes';

export default React.createClass({
  hasProps() {
    if (this.state === null) {
      return false;
    } else if (this.state.items) {
      return true;
    }
  },
  getInitialState() {
    return {...this.props};
  },
  componentWillReceiveProps(newProps) {
    return this.setState({...newProps});
  },
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    if (!this.hasProps()) { return ''; }

    return <LinkBoxes items={this.state.items} />;
  }
});