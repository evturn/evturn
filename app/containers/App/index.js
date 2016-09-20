import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Home from 'containers/Home'
import About from 'containers/About'
import Web from 'containers/Web'
import Mobile from 'containers/Mobile'
import OSS from 'containers/OSS'
import Header from 'components/Header'
import FlyoutMenu from 'components/FlyoutMenu'
import * as Actions from './actions'
import css from './style.css'
import 'sanitize.css/sanitize.css'
import 'config/analytics'

class App extends Component {
  render() {
    return (
      <div className={css.root}>
        <Header
          nav={this.props.nav.desktop}
          ready={this.props.ready}
          visible={this.props.visible}
          style={this.props.style}>
          <FlyoutMenu
            nav={this.props.nav.mobile}
            open={this.props.open}
            toggleMenu={this.props.toggleMenu}
          />
        </Header>
        <Match pattern="/" exactly component={Home} />
        <Match pattern="/about" exactly component={About} />
        <Match pattern="/work/web/:slug?" exactly component={Web} />
        <Match pattern="/work/mobile" exactly component={_ => Mobile(this.props.projects)} />
        <Match pattern="/work/oss" exactly component={_ => OSS(this.props.projects)} />
      </div>
    )
  }

  static propTypes = {
    nav: PropTypes.object,
    open: PropTypes.bool,
    ready: PropTypes.bool,
    toggleMenu: PropTypes.func,
    visible: PropTypes.bool,
  }
}

export default connect(
  state => ({
    projects: state.projects,
    nav: state.site.nav,
    open: state.site.open,
    ready: state.video.ready,
    visible: state.video.initialized || state.route.notRoot,
    style: !state.route.notRoot ? { position: 'absolute' } : null,
  }),
  Actions)(App)
