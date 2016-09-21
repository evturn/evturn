import React from 'react'
import A from 'components/A'
import css from './style.css'

export default ({ show, items }) => {
  if (!show) {
    return null
  }
  return (
    <footer className={css.footer}>
      <div className={css.content}>
          <div className={css.nav}>
            <div className={css.sections}>
              <ul className={css.ul}>
                {items.map(x =>
                  <li key={x.title} className={css.li}>
                    <A
                      pathname={x.route}
                      activeClassName={css.active}>
                      <span className={x.icon} />
                      <div className={css.name}>{x.title}</div>
                    </A>
                  </li>
                )}
              </ul>
            </div>
          </div>
        <div className={css.text}>Evan Turner | evturn.com © 2016</div>
      </div>
    </footer>
  )
}
