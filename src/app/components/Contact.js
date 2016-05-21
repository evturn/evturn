import React, { Component } from 'react'
import classNames from 'classnames/bind'
import css from 'less/containers/contact.less'

const cx = classNames.bind(css)

export default ({ links }) => (
  <div className={cx('contact')}>
    <ul className={cx('icons')}>{links.map((x, i) =>
      <li key={i} className={cx('item')}>
        <a href={x.url} target="_blank"><span className={x.icon} /></a>
      </li>
    )}</ul>
  </div>
)