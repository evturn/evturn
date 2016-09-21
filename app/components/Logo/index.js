import React from 'react'
import classNames from 'classnames/bind'
import A from 'components/A'
import Img from 'components/Img'
import css from './style.css'

const cx = classNames.bind(css)

export default ({ loading, image }) => (
  <div className={css.logo}>

    <div className={cx('img', { wait: loading })}>
      <A pathname="/"><Img src={image} /></A>
    </div>

    <div className={cx('diamond', { wait: loading })} />
    <div className={cx('border', { wait: loading })} />

  </div>
)
