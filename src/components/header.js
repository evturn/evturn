import React from 'react';
import Menu from 'components/menu';
import Overlay from 'components/overlay';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: false
    };
  },
  onChildChanged(openState) {
    return this.setState(openState);
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: nextProps.page
    });
  },
  render() {
    return (
      <div>
        <Overlay
          open={this.state.open}
          callbackParent={this.onChildChanged}
        />
        <Menu
          open={this.state.open}
          callbackParent={this.onChildChanged}
          page={this.state.page}
        />
      </div>
    );
  }
});