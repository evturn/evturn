import React, { Component, PropTypes } from 'react'

import 'sanitize.css/sanitize.css'

import { connect } from 'react-redux'

import { toggleMenu } from './actions'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


import cx from 'classnames'

import 'data/google-analytics'

class App extends Component {
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

        <div className={`${open ? 'overlay' : ''}`} />
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

const mapStateToProps = ({ site, video }) => ({
  params: site.params,
  nav: site.nav,
  open: site.open,
  ready: video.ready,
  mobile: video.mobile
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: _ => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
