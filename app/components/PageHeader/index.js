import React from 'react'
import css from './style.css'

export const PageHeader = ({ text, ...rest }) => {
  return (
    <div className={css.root} {...rest}>{text}</div>
  )
}

export default PageHeader
