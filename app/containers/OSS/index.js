import React from 'react'
import classNames from 'classnames/bind'
import Icon from 'components/Icon'
import css from './style.css'

const cx = classNames.bind(css)

export default props => (
  <div className={css.oss}>
    <ul className={css.items}>
      {props.oss.items.map(x =>
        <li
          key={x.slug}
          className={css.item}>
          <div className={css.name}>{x.name}</div>
          <div className={css.desc}>{x.description}</div>

          <div className={css.links}>
            {x.links.map(x =>
              <div
                key={x.url}
                className={css.link}>
                <a
                  href={x.url}
                  target="_blank">
                  <Icon className={cx(x.icon, css.icon)} />
                </a>
              </div>
            )}
          </div>
        </li>
      )}
    </ul>
  </div>
)
