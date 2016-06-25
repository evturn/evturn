import React from 'react'
import { Link } from 'react-router'

import css from './style.css'
import av from 'site-images/ev-av.svg'

const Logo = ({ ready, mobile, initialized }) => {
  return (
    <div className={`${css.logo} ${initialized ? '' : !ready ? css.wait : '' }`}>
      <Link to="/">
        <img src={`build/${av}`} />
      </Link>
    </div>
  )
}

export default Logo
