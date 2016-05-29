import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Sections from 'components/Sections'
import Footer from 'components/Footer'

import css from './style.css'

class Projects extends Component {
  render() {
    return (
      <div className={`${css.root} ${css.wrap}`}>
        <Sections sections={this.props.nav} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Projects.propTypes = {
  children: React.PropTypes.node,
  params: PropTypes.object,
  nav: PropTypes.array,
  params: PropTypes.object
}

const mapStateToProps = ({ site }) => ({
  nav: site.work.nav
})

export default connect(mapStateToProps)(Projects)
