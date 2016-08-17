import React from 'react'
import A from 'components/A'
import Img from 'components/Img'
import css from './style.css'
import av from 'images/site/ev-av.svg'

export default props => {
  const visibility = props.visible ? '' : !props.ready ? css.wait : ''
  return (
    <div className={`${css.logo} ${visibility}`}>
      <A pathname="/">
        <Img src={av} />
      </A>
    </div>
  )
}
