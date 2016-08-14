import React from 'react'
import A from 'components/A'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

export default props => {
  return (
    <div className={css.root}>
      <ul className={css.ul}>
        {props.projects.map((x, i) => {
          return (
            <li
              key={i}
              className={cx('thumb', { 'active': x.slug === props.slug })}>
              <A pathname={`/work/web/${x.slug}`}>
                <img src={require(`images/work/${x.thumbnail}`)} />
                <div className={css.overlay} />
              </A>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
