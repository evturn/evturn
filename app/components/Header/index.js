import React from 'react'
import A from 'components/A'
import Logo from 'components/Logo'
import css from './style.css'

export default ({ nav, ready, visible, children }) => (
  <header className={css.root}>
    <div className={css.nav}>
      <div className={css.pages}>
        {nav.map(x => (
          <div
            key={x.name}
            className={css.page}>
            <A pathname={x.route}>
              {x.name}
            </A>
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
