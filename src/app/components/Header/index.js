import React from 'react'
import { Link } from 'react-router'

import Logo from 'components/Logo'

import css from './style.css'

const Navbar = ({ nav, children }) => (
  <div className={css.nav}>
    <div className={css.pages}>{
      nav.map((x, i) => (
        <div key={i} className={css.page}>
          <Link
            to={x.route}
            children={x.name}
          />
        </div>
    ))}</div>
    {children}
    <div className={css.diamond} />
  </div>
)

const Header = ({ nav, ready, visible, children }) => (
  <header className={css.root}>
    <Navbar nav={nav}>
      <Logo
        ready={ready}
        visible={visible}
      />
    </Navbar>
    <div className={css.subnav} />
    {children}
  </header>
)

export default Header
