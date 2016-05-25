import React from 'react'
import classNames from 'classnames/bind'

import css from './style.less'

const cx = classNames.bind(css)

export default ({ open, toggleMenu, hex }) => (
  <footer
    className={css.footer}
    style={{ backgroundColor: hex }}>
    <div className={css.text}>Evan Turner | evturn.com  <span className="fa fa-copyright" /> 2016</div>
    <div className={cx({'overlay': open})} onClick={toggleMenu} />
  </footer>
)