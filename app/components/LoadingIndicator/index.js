import React from 'react'
import css from './style.css'

export default ({ className }) => {
  return (
    <div className={`${css.w} ${className ? className : ''}`}>
      <div className={css.w1} />
      <div className={css.w2} />
      <div className={css.w3} />
      <div className={css.w4} />
      <div className={css.w5} />
    </div>
  )
}