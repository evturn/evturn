import React from 'react'
import { Link } from 'react-router'

import css from './style.css'
import av from 'site-images/ev-av.svg'
import skel from 'site-images/skel.gif'

const Logo = ({ ready, mobile }) => (
  <div className={`${css.logo} ${!ready ? css.wait : '' }`}>
    <Link to="/">
      <img src={`build/${mobile ? skel : av}`} />
    </Link>
  </div>
)

export default Logo
