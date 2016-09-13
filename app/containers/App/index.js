import 'whatwg-fetch'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import 'sanitize.css/sanitize.css'
import 'config/analytics'
import * as Actions from './actions'
import Header from '../../components/Header'
import FlyoutMenu from 'components/FlyoutMenu'

import css from './style.css'

class App extends Component {
  render() {
    return (
      <div className={css.root}>
        <Header
          nav={this.props.nav.desktop}
          ready={this.props.ready}
          visible={this.props.visible}>
          <FlyoutMenu
            nav={this.props.nav.mobile}
            open={this.props.open}
            toggleMenu={this.props.toggleMenu}
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
  toggleMenu: _ => dispatch(Actions.toggleMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
