import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import 'sanitize.css/sanitize.css'
import 'data/google-analytics'

import { toggleMenu } from './actions'

import Header from '../../components/Header'

class App extends Component {
  render() {
    const {
      nav,
      open,
      ready,
      toggleMenu,
      mobile,
      initialized,
    } = this.props

    return (
      <div className="site">
        <Header
          nav={nav}
          open={open}
          toggleMenu={toggleMenu}
          mobile={mobile}
          ready={ready}
          initialized={initialized}
        />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  params: PropTypes.object,
  children: React.PropTypes.node,
  page: PropTypes.string,
  nav: PropTypes.object,
  open: PropTypes.bool,
  ready: PropTypes.bool,
  toggleMenu: PropTypes.func,
  mobile: PropTypes.bool,
  initialized: PropTypes.bool,
}

const mapStateToProps = ({ site, video, route }) => ({
  params: site.params,
  nav: site.nav,
  open: site.open,
  ready: video.ready,
  mobile: video.mobile,
  route: route.locationBeforeTransitions.pathname,
  initialized: video.initialized,
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: _ => dispatch(toggleMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
