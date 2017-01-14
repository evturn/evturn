import React from 'react'
import Link from 'react-router/Link'

const AsyncLink = ({ to, onClick, children }) => {
  const preventNavigation = e => {
    e.preventDefault()
    onClick()
  }

  return (
    <Link to={to} onClick={preventNavigation}>
      {children}
    </Link>
  )
}

export default AsyncLink