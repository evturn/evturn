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
      <nav className={cx('root', {
        open: props.open,
      })}>
        <div className={css.corner} />
        <ul className={css.routes}>
          <li
            className={css.close}
            onClick={props.toggleMenu}>
            <img src={close} />
          </li>
          {props.items.map(x =>
            <li
              key={x.name}
              className={css.route}>
              <h3 className={cx('name', {
                parentName: x.childRoutes,
              })}>
                <A
                  pathname={x.route}
                  onClick={props.onClick}>
                  {x.name}
                </A>
              </h3>
              {x.childRoutes
                ? <ul className={css.childRoutes}>
                    {x.childRoutes.map(x =>
                      <li
                        key={x.name}
                        className={css.childRoute}>
                        <h5 className={css.childName}>
                          <A
                            pathname={x.route}
                            onClick={props.onClick}>
                            {x.name}
                          </A>
                        </h5>
                      </li>
                    )}
                  </ul>
                : null
              }
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
