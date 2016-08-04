import React from 'react'

import css from './style.css'

export default props => (
  <ul className={css.items}>{props.ios.map((x, i) =>
    <li key={i} className={css.item}>
      <div className={css.name}>{x.name}</div>
      <img src="https://media3.giphy.com/media/lpydvIOdsHw0U/200_s.gif" />
    </li>
  )}</ul>
)
