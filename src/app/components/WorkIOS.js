import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import css from 'less/components/work-ios.less'

const cx = classNames.bind(css)

export default class WorkIOS extends Component {
  render() {
    return (
      <ul className={cx('items')}>{this.props.iOS.map(x =>
        <li key={x.name} className={cx('item')}>
          <div className={cx('name')}>{x.name}</div>
          <img className="img" src={require(`work-images/${x.image}`)} />
        </li>
      )}</ul>
    )
  }
}

WorkIOS.propTypes = {
  OSS: PropTypes.array
}

export default connect(
  state => ({ iOS: state.site.work.iOS })
)(WorkIOS)