import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

const HeaderNav = ({ open, onClick }) => {
  return (
    <div className={`${css.root} ${open ? css.open : ''}`}>
      <ul className={css.ul}>
        <li className={css.li}>
          <Link
            to='/'
            onClick={onClick}
            className={css.link}>Start</Link>
        </li>
        <li className={css.li}>
          <Link
            to='/web'
            onClick={onClick}
            className={css.link}>Web</Link>
        </li>
        <li className={css.li}>
          <Link
            to='/'
            onClick={onClick}
            className={css.link}>Mobile</Link>
        </li>
        <li className={css.li}>
          <Link
            to='/'
            onClick={onClick}
            className={css.link}>Software</Link>
        </li>
        <li className={css.li}>
          <Link
            to='/'
            onClick={onClick}
            className={css.link}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderNav
