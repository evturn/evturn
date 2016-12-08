import React from 'react'
import css from './style.css'

export default ({ done }) => {
  return (
    <div className={`${css.root} ${done ? css.fade : ''}`}>
      <div className={css.w}>
        <div className={css.w1} />
        <div className={css.w2} />
        <div className={css.w3} />
        <div className={css.w4} />
        <div className={css.w5} />
      </div>
    </div>
  )
}