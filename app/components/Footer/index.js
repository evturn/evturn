import React from 'react'
import Sections from 'components/Sections'
import css from './style.css'

export default props => (
  <footer className={css.footer}>
    <div className={css.content}>
      <Sections items={props.items} />
      <div className={css.text}>Evan Turner | evturn.com © 2016</div>
    </div>
  </footer>
)
