import React from 'react'
import Footer from 'components/Footer'
import css from './style.css'

export default props => (
  <div className={css.oss}>
    <ul className={css.items}>
      {props.oss.items.map((x, i) =>

        <li key={i} className={css.item}>
          <div className={css.content}>
            <div className={css.name}>{x.name}</div>
            <div className={css.desc}>{x.description}</div>

            <ul className={css.links}>
              {x.links.map((link, i) =>
                <li key={i} className={css.link}>
                  <a href={link.url} target="_blank">
                    <span className={link.icon} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </li>
      )}
    </ul>
    <Footer />
  </div>
)
