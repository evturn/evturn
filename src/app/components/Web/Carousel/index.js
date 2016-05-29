import React from 'react'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default ({ images }) => (
  <div className={css.carousel}>
    <div className={css.slides}>{images.map((x, i)=>
      <div key={i} className={cx('slide', { 'active': x.active })}>
        <img src={x.src} />
      </div>
    )}</div>
  </div>
)
