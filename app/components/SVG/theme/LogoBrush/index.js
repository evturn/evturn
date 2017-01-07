import React from 'react'
import Logo from 'components/SVG/theme/Logo'
import Brushstroke from 'components/SVG/theme/Brushstroke'
import css from './style.css'

export const LogoBrush = props => {
  return (
    <div>
      <div className={css.stroke}>
        <Brushstroke className={css.svg} />
      </div>
      <Logo className={css.logo} />
    </div>
  )
}

export default LogoBrush
