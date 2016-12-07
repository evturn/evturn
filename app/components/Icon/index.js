import React from 'react'

export const Icon = ({ className, style, children }) => {
  const size = !className
    ? {width: '32px', height: '32px'}
    : style
  return (
    <svg
      className={className}
      style={size}
      viewBox="0 0 32 32">
      {children}
    </svg>
  )
}

export default Icon