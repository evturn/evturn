import React, { Component } from 'react'
import HeaderNav from './HeaderNav'
import css from './style.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleMenu = ::this.toggleMenu
  }

  state = {open: false}

  toggleMenu() {
    this.setState({open: !this.state.open})
  }

  render() {
    const { open } = this.state
    return (
      <header className={css.root}>
        <div className={css.wrap}>
          <div
            onClick={this.toggleMenu}
            className={`${css.hamburger} ${open ? css.open : ''}`}>
            <hr className={css.line1} />
            <hr className={css.line3} />
          </div>
          <HeaderNav
            open={open}
            onClick={this.toggleMenu} />
        </div>
      </header>
    )
  }
}

export default Header