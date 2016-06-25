import React from 'react'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default ({ img, ready, done }) => (
  <div className={cx('root', {'fade': ready, 'kill': done  })}>
    <div className={css.logo}>
      <img className={css.image} src={img} />
    </div>
    <div className={css.spinner} />
  </div>
)
