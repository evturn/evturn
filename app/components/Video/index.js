import React from 'react'

export default props => (
  <video
    ref={props.backingInstance}
    src={props.src}
    poster={props.poster}
    type="video/mp4"
    preload="auto"
    autoPlay="true"
    muted="true"
  />
)
