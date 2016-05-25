import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import css from 'less/components/work-ios.less'

const cx = classNames.bind(css)

class IOS extends Component {
  render() {
    return (
      <ul className={cx('items')}>{this.props.iOS.map((x, i) =>
        <li key={i} className={cx('item')}>
          <div className={cx('name')}>{x.name}</div>
          <img className="img" src={`build/` + require(`work-images/${x.image}`)} />
        </li>
      )}</ul>
    )
  }
}

const mapStateToProps = ({ site}) => ({
  iOS: site.work.iOS
})

export default connect(mapStateToProps)(IOS)
