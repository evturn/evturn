import React from 'react'
import css from 'less/components/footer.less'

export default ({ page }) => {
  return (
    <footer className={css.footer}>
      <div className={css.text}>Evan Turner | evturn.com  <span className="fa fa-copyright" /> 2016</div>
    </footer>
  )
}