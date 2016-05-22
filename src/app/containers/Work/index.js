import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import css from 'less/containers/work.less'

const cx = classNames.bind(css)

class Work extends Component {
  render() {
    return (
      <div className={cx('page')}>
        <ul className={cx('categories')}>{this.props.nav.map((x, i) =>
          <li key={i} className={cx('item')}>
            <Link to={x.route} activeClassName={cx('active')}>
              <span className={x.icon} />
              <div className={cx('title')}>{x.title}</div>
            </Link>
          </li>
        )}</ul>
        {this.props.children}
      </div>
    )
  }
}

Work.propTypes = {
  nav: PropTypes.array,
  params: PropTypes.object,
  iOS: PropTypes.array,
  OSS: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  nav: site.work.nav,
  iOS: site.work.iOS,
  OSS: site.work.OSS,
})

export default connect(mapStateToProps)(Work)
