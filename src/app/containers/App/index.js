import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import 'sanitize.css/sanitize.css'
import 'data/google-analytics'

import { toggleMenu } from './actions'

import Header from '../../components/Header'
import FlyoutMenu from 'components/FlyoutMenu'

class App extends Component {
  render() {
    const {
      nav,
      open,
      ready,
      toggleMenu,
      visible,
    } = this.props

    return (
      <div className="site">
        <Header
          nav={nav.desktop}
          ready={ready}
          visible={visible}>
          <FlyoutMenu
            nav={nav.mobile}
            open={open}
            toggleMenu={toggleMenu}
          />
        </Header>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  params: PropTypes.object,
  children: React.PropTypes.node,
  nav: PropTypes.object,
  open: PropTypes.bool,
  ready: PropTypes.bool,
  toggleMenu: PropTypes.func,
  visible: PropTypes.bool,
}

const mapStateToProps = ({ site, video, route }) => ({
  params: site.params,
  nav: site.nav,
  open: site.open,
  ready: video.ready,
  visible: video.initialized || route.notRoot,
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: _ => dispatch(toggleMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
