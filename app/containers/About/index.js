import React from 'react'
import Img from 'components/Img'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import img from 'images/site/ev-av.svg'
import css from './style.css'

import { selectTech } from '../../reducers/content'

export default props => {
  const tools = selectTech(props)

  return (
    <div className={`${css.root} ${css.wrap}`}>

      <div className={css.about}>
        <div className={css.av}>
          <div className={css.image}>
            <Img src={img} />
          </div>
        </div>
        <div className={css.details}>
          <div className={css.bio}>
            <div className={css.title}>Development</div>
            <div className={css.text}>{props.copy}</div>
          </div>
          <div className={css.tech}>
            <ul className={css.list}>{tools.map((x, i) =>
              <li key={i} className={css.item}>
                <Icon className={x.icon} />
              </li>
            )}</ul>
          </div>
        </div>
      </div>

      <div className={css.contact}>
        <div className={css.title}>Contact</div>
        <ul className={css.links}>{props.contact.map((x, i) =>
          <li
            key={i}
            className={css.link}>
            <a
              href={x.url}
              target="_blank">
              <span className={x.icon} />
            </a>
          </li>
        )}</ul>
      </div>

      <Footer />
    </div>
  )
}
