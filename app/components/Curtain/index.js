import React from 'react'
import css from './style.css'

export const Curtain = ({ show=true, onClick, className, ...rest }) => {
  return show
    ? <div
        {...rest}
        onClick={onClick}
        className={`${css.root} ${className ? className : ''}`} />
    : null
}

export default Curtain