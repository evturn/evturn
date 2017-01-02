import React from 'react'

export const Icon = ({ viewBox, className, style={}, children, ...rest }) => {

  const size = className
             ? style
             : !style.width || !style.height
               ? {width: '32px', height: '32px'}
               : style

  const box = !viewBox
            ? '0 0 32 32'
            : viewBox
  return (
    <svg
      className={className}
      style={size}
      viewBox={box}
      {...rest}>
      {children}
    </svg>
  )
}

export default Icon