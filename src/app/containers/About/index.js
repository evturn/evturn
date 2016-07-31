import React from 'react'

import Footer from 'components/Footer'
import css from './style.css'

/*
technologies.reduce((acc, x) => {
    return devicons
      .filter(y => x === y.slug)
      .concat(acc)
  }, [])
*/

export default ({ copy, tools, contact }) => (
  <div className={`${css.root} ${css.wrap}`}>

    <div className={css.about}>
      <div className={css.av}>
        <div className={css.image}>
          <img className="img" src={`build/` + require('site-images/ev-av.svg')} />
        </div>
      </div>
      <div className={css.details}>
        <div className={css.bio}>
          <div className={css.title}>Development</div>
          <div className={css.text}>{copy}</div>
        </div>
        <div className={css.tech}>
          <ul className={css.list}>{tools.map((x, i) =>
            <li key={i} className={css.item}>
              <span className={x.icon} />
            </li>
          )}</ul>
        </div>
      </div>
    </div>

    <div className={css.contact}>
      <div className={css.title}>Contact</div>
      <ul className={css.links}>{contact.map((x, i) =>
        <li key={i} className={css.link}>
          <a href={x.url} target="_blank"><span className={x.icon} /></a>
        </li>
      )}</ul>
    </div>

    <Footer />
  </div>
)
