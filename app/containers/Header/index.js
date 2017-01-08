import React, { Component } from 'react'
import Menu from 'components/Menu'
import Curtain from 'components/Curtain'
import Hamburger from 'components/Hamburger'
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
      <div className={css.root}>
        <header className={css.header}>
          <div className={css.wrap}>
            <Hamburger
              open={open}
              onClick={this.toggleMenu} />
            <Menu
              open={open}
              routes={routes}
              onClick={this.toggleMenu} />
          </div>
        </header>
        <Curtain show={open} onClick={this.toggleMenu} />
      </div>
    )
  }
}

export default Header