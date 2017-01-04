import React, { Component } from 'react'
import HeaderNav from './HeaderNav'
import css from './style.css'

class Header extends Component {
  static defaultProps = {
    routes: [
      {to: '/',         text: 'Start'},
      {to: '/web',      text: 'Web'},
      {to: '/mobile',   text: 'Mobile'},
      {to: '/software', text: 'Software'},
      {to: '/contact',  text: 'Contact'}
    ]
  }

  state = {open: false}

  toggleMenu = _ => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { open } = this.state
    const { routes } = this.props
    return (
      <header className={`${css.root} ${!open ? css.short : ''}`}>
        <div className={css.wrap}>
          <div
            onClick={this.toggleMenu}
            className={`${css.hamburger} ${open ? css.open : ''}`}>
            <hr className={css.line1} />
            <hr className={css.line3} />
          </div>
          <HeaderNav
            open={open}
            routes={routes}
            onClick={this.toggleMenu} />
        </div>
      </header>
    )
  }
}

export default Header