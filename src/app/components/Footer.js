import React from 'react'
import classNames from 'classnames/bind'
import css from 'less/components/footer.less'

const cx = classNames.bind(css)

export default ({ page }) => {
  return (
    <footer className={cx('footer', page)}>
      <div className={cx('text')}>Evan Turner | evturn.com  <span className="fa fa-copyright" /> 2016</div>
    </footer>
  )
}