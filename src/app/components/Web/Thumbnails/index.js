import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default ({ nav, id }) => (
  <div className={css.root}>
    <ul className={css.ul}>{nav.map((x, i)=>
      <li
        key={i}
        className={cx('thumb', { 'active': x.id === id })}
        onClick={_ => window.scrollTo(0, 0)}>
        <Link to={`/work/web/${x.id}`}>
          <img src={x.src} />
          <div className={css.overlay} />
        </Link>
      </li>
    )}</ul>
  </div>
)
