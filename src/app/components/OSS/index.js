import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import css from './style.css'

const cx = classNames.bind(css)

class WorkOSS extends Component {
  render() {
    return (
      <ul className={cx('items')}>{this.props.OSS.map(x =>
        <li key={x.name} className={cx('item')}>
          <div className={cx('content')}>
            <div className={cx('name')}>{x.name}</div>
            <div className={cx('desc')}>{x.description}</div>

            <ul className={cx('links')}>{x.links.map(link =>
              <li key={link.url} className={cx('link')}>
                <a href={link.url} target="_blank">
                  <span className={link.icon} />
                </a>
              </li>
            )}</ul>

          </div>
        </li>
      )}</ul>
    );
  }
}

WorkOSS.propTypes = {
  OSS: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  OSS: site.work.OSS
})

export default connect(mapStateToProps)(WorkOSS)
