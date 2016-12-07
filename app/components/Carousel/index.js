import React from 'react'
import classNames from 'classnames/bind'
import SVGIcon from 'components/Icons'
import Img from 'components/Img'
import css from './style.css'

const cx = classNames.bind(css)

export default props => (
  <div className={css.carousel}>
    <div className={css.image}>
      <div className={css.slides}>
        {props.images.map((x, i) =>
          <div
            key={i}
            className={cx('slide', {
              active: i === props.slide
            })}>
            <Img src={require(`images/work/${x}`)} />
          </div>
        )}
      </div>
    </div>

    <div className={css.panel}>
      <div className={css.name}>{props.name}</div>
      <div className={css.desc}>{props.description}</div>
      <ul className={css.links}>
        {props.links
          ? props.links.map(x =>
              <li key={x.name} className={css.item}>
                <a
                  className={css.ext}
                  href={x.url}
                  target="_blank">
                  <SVGIcon name={x.icon} className={css.icon} />
                </a>
                <div className={css.caption}>{x.name}</div>
              </li>
            )
          : null
        }
      </ul>
      <ul className={css.tech}>
        {props.tech.map(x =>
          <li key={x.name} className={css.item}>
            <SVGIcon name={x.icon} />
            <div className={css.caption}>{x.name}</div>
          </li>
        )}
      </ul>
    </div>
  </div>
)
