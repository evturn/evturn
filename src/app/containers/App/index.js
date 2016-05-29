import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import 'sanitize.css/sanitize.css'
import 'data/google-analytics'

import { toggleMenu } from './actions'
import { skipVideoInitialization } from 'containers/Home/actions'

import Header from '../../components/Header'

class App extends Component {
  componentWillMount() {
    if (this.props.route.length > 1) {
      this.props.skipVideoInitialization(800)
    }
  }

  render() {
    const {
      nav,
      open,
      ready,
      toggleMenu,
      mobile
    } = this.props

    return (
      <div className="site">

        <Header
          nav={nav}
          open={open}
          toggleMenu={toggleMenu}
          mobile={mobile}
          ready={ready}
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
  mobile: PropTypes.bool
}

const mapStateToProps = ({ site, video, route }) => ({
  params: site.params,
  nav: site.nav,
  open: site.open,
  ready: video.ready,
  mobile: video.mobile,
  route: route.locationBeforeTransitions.pathname
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: _ => dispatch(toggleMenu()),
  skipVideoInitialization: duration => dispatch(skipVideoInitialization(duration))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
