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
        <Sections sections={this.props.sections} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Projects.propTypes = {
  sections: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  sections: site.sections
})

export default connect(mapStateToProps)(Projects)
