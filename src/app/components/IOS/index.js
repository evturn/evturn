import React, { Component, PropTypes } from 'react'
import css from './style.css'

export default iOS => (
  <ul className={css.items}>{iOS.map((x, i) =>
    <li key={i} className={css.item}>
      <div className={css.name}>{x.name}</div>
      <img src={`build/` + require(`work-images/${x.image}`)} />
    </li>
  )}</ul>
)
