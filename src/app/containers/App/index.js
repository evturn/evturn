import React, { Component, PropTypes } from 'react'

import 'sanitize.css/sanitize.css'

import { connect } from 'react-redux'

import { pageTransition, toggleMenu } from './actions'

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
      toggleMenu
    } = this.props

    return (
      <div className="site">
        <Header
          nav={nav}
          open={open}
          ready={ready}
          toggleMenu={toggleMenu}
        />

        {this.props.children}

        <Footer
          open={open}
          toggleMenu={toggleMenu}
        />
      </div>
    )
  }
}

App.propTypes = {
  page: PropTypes.string,
  nav: PropTypes.object,
  open: PropTypes.bool,
  ready: PropTypes.bool,
  params: PropTypes.object,
  toggleMenu: PropTypes.func,
  children: React.PropTypes.node,
}

const mapStateToProps = ({ site, video }) => ({
  params: site.params,
  nav: site.nav,
  open: site.open,
  ready: video.ready
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: _ => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
