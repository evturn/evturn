import React from 'react'

import css from './style.css'

export default props => (
  <ul className={css.items}>{props.ios.items.map((x, i) =>
    <li key={i} className={css.item}>
      <div className={css.name}>{x.name}</div>
      <img src={require(`images/work/${x.image}`)} />
    </li>
  )}</ul>
)
