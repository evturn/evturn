import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import Menu from 'components/Menu'
import css from './style.less'

const cx = classNames.bind(css)

export default ({ open, nav, toggleMenu, ready }) => (
  <header>
    <div className={css.nav}>
      <div className={css.diamond} />
      <div className={cx('logo', { 'wait': !ready })}>
        <Link to="/">
          <img src={require('site-images/ev-av.svg')} />
        </Link>
      </div>
    </div>
    <div className={css['sub-nav']} />

    <div className={css.burger} onClick={toggleMenu}>
      <span className="fa fa-bars" />
    </div>

    <Menu
      open={open}
      nav={nav.mobile}
      toggleMenu={toggleMenu}
    />
  </header>
)
