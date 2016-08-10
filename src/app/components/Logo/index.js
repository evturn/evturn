import React from 'react'
import { Link } from 'react-router'

import css from './style.css'
import av from 'images/site/ev-av.svg'

export default props => {
  const visibility = props.visible ? '' : !props.ready ? css.wait : ''
  return (
    <div className={`${css.logo} ${visibility}`}>
      <Link to="/">
        <img src={`build/${av}`} />
      </Link>
    </div>
  )
}
