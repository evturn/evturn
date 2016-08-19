import React from 'react'
import A from 'components/A'
import Img from 'components/Img'
import classNames from 'classnames/bind'
import close from './close.svg'
import css from './style.css'

const cx = classNames.bind(css)

export default props => {
  return (
    <div>
      <div
        className={css.burger}
        onClick={props.toggleMenu}>
        <span className="fa fa-bars" />
      </div>
      <nav className={cx('root', { open: props.open })}>
        <div className={css.corner} />
        <ul className={css.ul}>
          {props.nav.map((x, i) =>
            <li
              key={i}
              className={css.li}
              onClick={props.toggleMenu}>
              {x.route
                ? <A pathname={x.route}>{x.name}</A>
                : <img src={close} />
              }
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
