import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import css from './style.less'

const cx = classNames.bind(css)

const Thumbnails = ({ nav, id }) => (
  <ul className={css.ul}>{nav.map((x, i)=>
    <li
      key={i}
      className={cx('thumb', { 'active': x.id === id })}>
      <Link to={`/work/web/${x.id}`}>
        <img src={x.src} />
        <div className={css.overlay} />
      </Link>
    </li>
  )}</ul>
)

export default Thumbnails