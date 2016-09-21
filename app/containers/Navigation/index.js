import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Home from 'containers/Home'
import About from 'containers/About'
import Web from 'containers/Web'
import Mobile from 'containers/Mobile'
import OSS from 'containers/OSS'
import Footer from 'components/Footer'
import FlyoutMenu from 'components/FlyoutMenu'
import Logo from 'components/Logo'
import A from 'components/A'
import img from 'images/site/ev-av.svg'
import * as Actions from './actions'
import { selectLoadingState } from 'containers/Navigation/selectors'
import css from './style.css'

class Navigation extends Component {
  render() {
    return (
      <div>
        <header
          style={{ position: this.props.notRoot ? 'relative' : 'absolute' }}
          className={css.header}>
          <Navbar items={this.props.nav.desktop}>
            <Logo
              loading={this.props.loading}
              image={img}
            />
          </Navbar>

          <FlyoutMenu
            items={this.props.nav.mobile}
            open={this.props.open}
            toggleMenu={this.props.toggleMenu}
            onClick={this.props.locationChange}
          />
        </header>

        <Match pattern="/" exactly component={Home} />

        <div className={css.root}>
          <Match pattern="/about" exactly component={About} />
          <Match pattern="/work/web/:slug?" exactly component={Web} />
          <Match pattern="/work/mobile" exactly component={_ => Mobile(this.props.projects)} />
          <Match pattern="/work/oss" exactly component={_ => OSS(this.props.projects)} />

          <Footer
            show={this.props.notRoot}
            items={this.props.sections}
          />
        </div>
      </div>
    )
  }

  static propTypes = {
    nav: PropTypes.object,
    loading: PropTypes.bool,
    locationChange: PropTypes.func,
    toggleMenu: PropTypes.func,
    sections: PropTypes.array,
    showFooter: PropTypes.bool,
    projects: PropTypes.object,
  }
}

const Navbar = ({ items, children }) => (
  <div className={css.navbar}>
    <div className={css.links}>
      {items.map(x =>
        <div
          key={x.name}
          className={css.link}>
          <A pathname={x.route}>{x.name}</A>
        </div>
      )}
    </div>
    {children}
  </div>
)

export default connect(
  (state, ownProps) => {
    const pathname = ownProps.location.pathname
    return {
      nav: state.site.nav,
      open: state.site.open,
      loading: selectLoadingState(state, pathname),
      sections: state.site.sections,
      notRoot: pathname !== '/',
      projects: state.projects,
    }
  },
  Actions
)(Navigation)
