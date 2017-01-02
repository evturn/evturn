import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

const HeaderNav = ({ routes, open, onClick }) => {
  return (
    <div className={`${css.root} ${open ? css.open : ''}`}>
      <ul className={css.ul}>
        {routes.map(x =>
          <li className={css.li} key={x.to}>
            <Link
              to={x.to}
              onClick={onClick}
              className={css.link}>{x.text}</Link>
          </li>)}
      </ul>
    </div>
  )
}

export default HeaderNav
