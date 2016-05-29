import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default ({ open, nav, toggleMenu }) => (
  <div>
    <div className={css.burger} onClick={toggleMenu}>
      <span className="fa fa-bars" />
    </div>

    <nav className={cx('root', { open })}>
      <div className={css.corner} />
      <ul className={css.ul}>
        {nav.map((x, i) =>
          <li key={i} className={css.li} onClick={toggleMenu}>{x.route ?
            <Link to={x.route} children={x.name} /> :
            <span className={x.name} />
          }</li>
        )}
      </ul>
    </nav>
  </div>
)
