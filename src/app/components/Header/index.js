import React from 'react'

import Navbar from 'components/Navbar'
import FlyoutMenu from 'components/FlyoutMenu'

import css from './style.css'

export default ({ open, nav, toggleMenu, ready, mobile }) => (
  <header className={css.root}>
    <Navbar
      nav={nav.desktop}
      ready={ready}
      mobile={mobile}
    />

    <div className={css.subnav} />

    <FlyoutMenu
      nav={nav.mobile}
      open={open}
      toggleMenu={toggleMenu}
    />
  </header>
)
