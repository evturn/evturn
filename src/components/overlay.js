import React from 'react';
import classNames from 'classnames/bind';
import styles from 'styles/components/overlay.less';

const cx = classNames.bind(styles);


export default React.createClass({
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
    const open = cx({'overlay': this.state.open});

    return <div className={open} onClick={this.handleClick} />;
  }
});