import React from 'react';
import classNames from 'classnames/bind';
import Menu from 'components/menu';
import styles from 'styles/components/overlay.less';

const cx = classNames.bind(styles);

export default React.createClass({
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
        <div
          className={cx({'overlay': this.state.open})}
          onClick={() => this.onChildChanged({open: !this.state.open})}
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