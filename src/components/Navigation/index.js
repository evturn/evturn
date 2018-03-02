import React, { Component } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import styles from './style.css';

class Navigation extends Component {
  state = {
    menuVisible: false,
  }

  updateMenuVisibility = () => {
    this.setState({menuVisible: !this.state.menuVisible});
  }

  render() {
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.inner}>
            <Navbar
              menuVisible={this.state.menuVisible}
              onClick={this.updateMenuVisibility} />
            <Menu
              items={this.props.data.menu}
              menuVisible={this.state.menuVisible}
              onClick={this.updateMenuVisibility} />
          </div>
        </header>
      </div>
    );
  }
};

export default Navigation;
