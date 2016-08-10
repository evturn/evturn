import React from 'react'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default props => (
  <div className={css.carousel}>
    <div className={css.slides}>
      {props.images.map((x, i) => {
        return (
          <div
            key={i}
            className={cx('slide', { 'active': i === props.slide })}>
            <img src={require(`images/work/${x}`)} />
          </div>
        )
      })}
    </div>
  </div>
)
