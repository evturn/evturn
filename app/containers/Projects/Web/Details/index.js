import React from 'react'
import css from './style.css'

export default props => (
  <div className={css.root}>
    <div className={css.name}>{props.name}</div>
    <div className={css.desc}>{props.description}</div>

    <ul className={css.links}>
      {props.links
        ? props.links.map(x =>
            <li key={x.name}
              className={css.item}>
              <a
                className={css.ext}
                href={x.url}
                target="_blank">
                <span className={x.icon} />
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
          <span className={x.icon} />
          <div className={css.caption}>{x.name}</div>
        </li>
      )}
    </ul>
  </div>
)
