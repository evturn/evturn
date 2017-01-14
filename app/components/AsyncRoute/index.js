import React from 'react'
import Match from 'react-router/Match'
import LazyLoad from 'containers/LazyLoad'

const AsyncRoute = ({ pattern, component, ...rest }) => {
  return (
    <Match pattern={pattern} {...rest} render={props =>
      <LazyLoad modules={{ component }}>
        {({ component:Component }) => <Component {...props} {...rest} />}
      </LazyLoad>
    } />
  )
}

export default AsyncRoute