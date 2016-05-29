import React from 'react'
import { Link } from 'react-router'

import Menu from 'components/Menu'
import css from './style.css'

export default ({ open, nav, toggleMenu, children }) => (
  <header className={css.root}>
    <div className={css.nav}>

      <div className={css.pages}>
        {nav.desktop.map((x, i) =>
          <div key={i} className={css.page}>
            <Link
              to={x.route}
              children={x.name}
            />
          </div>
      )}</div>

      <div className={css.diamond} />

      {children}

    </div>

    <div className={css['sub-nav']} />
    <div className={css.burger} onClick={toggleMenu}>
      <span className="fa fa-bars" />
    </div>

    <Menu
      open={open}
      nav={nav.mobile}
      toggleMenu={toggleMenu}
    />
  </header>
)
