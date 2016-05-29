import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Sections from 'components/Sections'
import Footer from 'components/Footer'
import css from './style.css'

class Projects extends Component {
  render() {
    return (
      <div className={`${css.root} ${css.wrap}`}>
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
