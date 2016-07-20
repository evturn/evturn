import React from 'react'
import { Link } from 'react-router'
import Logo from 'components/Logo'
import css from './style.css'

export default ({ nav, ready, visible, children }) => (
  <header className={css.root}>
    <div className={css.nav}>
      <div className={css.pages}>
        {nav.map(x => (
          <div key={x.name} className={css.page}>
            <Link
              to={x.route}
              children={x.name}
            />
          </div>
        ))}
      </div>
      <Logo
        ready={ready}
        visible={visible}
      />
      <div className={css.diamond} />
    </div>
    <div className={css.subnav} />
    {children}
  </header>
)
