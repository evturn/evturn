import React from 'react'
import css from './style.css'

export const PageHeader = ({ text, ...rest }) => {
  return (
    <h1 className={css.root} {...rest}>{text}</h1>
  )
}

export default PageHeader