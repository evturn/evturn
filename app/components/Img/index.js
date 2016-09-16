import React from 'react'

export default props => {
  return (
    <img
      className={props.className}
      style={{ ...props.style }}
      src={props.src}
    />
  )
}
