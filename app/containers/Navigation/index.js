import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Home from 'containers/Home'
import About from 'containers/About'
import Web from 'containers/Web'
import Mobile from 'containers/Mobile'
import OSS from 'containers/OSS'
import FlyoutMenu from 'components/FlyoutMenu'
import ProjectsMenu from 'components/ProjectsMenu'
import Logo from 'components/Logo'
import A from 'components/A'
import img from 'images/site/ev-av.svg'
import * as Actions from './actions'
import { selectLoadingState } from 'containers/Navigation/selectors'
import css from './style.css'

class Navigation extends Component {
  static propTypes = {
    nav: PropTypes.object,
    loading: PropTypes.bool,
    locationChange: PropTypes.func,
    toggleMenu: PropTypes.func,
    sections: PropTypes.array,
    projects: PropTypes.object,
  }

  render() {
    return (
      <div className={css.root}>

        <Header
          notRoot={this.props.notRoot}
          items={this.props.nav.desktop}
          loading={this.props.loading}
          image={img}>
          <FlyoutMenu
            items={this.props.nav.mobile}
            open={this.props.open}
            toggleMenu={this.props.toggleMenu}
            onClick={this.props.locationChange}
          />
        </Header>

        <Match pattern="/" exactly component={Home} />

        <MatchRoutes routes={this.props.routes}>
          <Footer>
            <ProjectsMenu items={this.props.sections} />
          </Footer>
        </MatchRoutes>

      </div>
    )
  }
}

const MatchRoutes = ({ routes, children }) => {
  return <div>
    {routes.map((x, i) => (
      <Match key={i} pattern={x.pattern} render={props =>
        <div>
          <x.component {...props} />
          {children}
        </div>
      } />
    ))}
  </div>
}

const Header = ({ items, notRoot, loading, image, children }) => (
  <header
    style={{ position: notRoot ? 'relative' : 'absolute' }}
    className={css.header}>
    <div className={css.navbar}>
      <div className={css.links}>
        {items.map(x =>
          <div key={x.name} className={css.link}>
            <A pathname={x.route}>{x.name}</A>
          </div>
        )}
      </div>
      <Logo loading={loading} image={image} />
    </div>
    {children}
  </header>
)

const Footer = ({ children }) => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        {children}
        <div className={css.text}>Evan Turner | evturn.com © 2016</div>
      </div>
    </footer>
  )
}

export default connect(
  (state, ownProps) => {
    const pathname = ownProps.location.pathname
    const routes = [
      { pattern: '/work/web/:slug?', component: Web, },
      { pattern: '/work/mobile', component: _ => Mobile(state.projects) },
      { pattern: '/work/oss', component: _ => OSS(state.projects) },
      { pattern: '/about', component: About }
    ]
    return {
      routes,
      notRoot: pathname !== '/',
      nav: state.site.nav,
      open: state.site.open,
      loading: selectLoadingState(state, pathname),
      sections: state.site.sections,
    }
  },
  Actions
)(Navigation)
