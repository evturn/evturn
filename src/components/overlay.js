import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      visible: 'overlay'
    };
  },
  getInitialState() {
    return {
      open: this.props.open
    };
  },
  handleClick() {
    this.props.callbackParent({ open: false });
  },
  componentWillReceiveProps(nextProps) {
    if (this.state.open !== nextProps.open) {
      this.setState({
        open: nextProps.open
      });
    }
  },
  render() {
    const open = this.state.open ? this.props.visible : '';

    return <div className={open} onClick={this.handleClick} />;
  }
});