import React, { Children } from 'react'
import LazyLoad from 'containers/LazyLoad'
import icons from 'components/SVG/icons'

export const SVG = ({ name, children, ...rest }) => {
  const { module, displayName } = icons[name]
  return (
    <LazyLoad modules={{ module }}>
      {({ module:Component }) =>
        <div>
          <Component {...rest} />
          {children ? Children.only(children({ displayName })) : null }
        </div>
      }
    </LazyLoad>
  )
}

export default SVG