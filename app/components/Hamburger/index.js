import React from 'react'
import css from './style.css'

export const Hamburger = ({ open, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${css.root} ${open ? css.open : ''}`}>
      <hr className={css.bar} />
      <hr className={css.bar} />
    </div>
  )
}

export default Hamburger
