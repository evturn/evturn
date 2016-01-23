import React from 'react';
import classNames from 'classnames/bind';
import Menu from 'components/menu';
import styles from 'styles/components/overlay.less';

const cx = classNames.bind(styles);

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.page,
      open: false
    };
  }
  onChildChanged(openState) {
    return this.setState(openState);
  }
  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: nextProps.page
    });
  }
  render() {
    return (
      <div>
        <div
          className={cx({'overlay': this.state.open})}
          onClick={() => this.toggleMenu()}
        />
        <Menu
          open={this.state.open}
          toggleMenu={this.toggleMenu}
          page={this.state.page}
        />
      </div>
    );
  }
}