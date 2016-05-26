import React from 'react'
import classNames from 'classnames/bind'

import css from './style.less'

const cx = classNames.bind(css)

export default _ => (
  <footer className={css.footer}>
    <div className={css.text}>Evan Turner | evturn.com  <span className="fa fa-copyright" /> 2016</div>
  </footer>
)