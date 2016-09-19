import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Sections from 'components/Sections'
import Footer from 'components/Footer'
import classNames from 'classnames/bind'
import css from './style.css'

const cx = classNames.bind(css)

class Projects extends Component {
  render() {
    return (
      <div className={cx('root', 'wrap')}>
        {this.props.children}
        <Footer items={this.props.sections} />
      </div>
    )
  }

  static propTypes = {
    sections: PropTypes.array
  }
}

export default connect(
  state => ({
    sections: state.site.sections,
  })
)(Projects)
