import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pageTransition, toggleMenu } from 'actions/site'
import Footer from 'components/Footer'
import Header from 'components/Header'
import classNames from 'classnames/bind'
import css from 'less/components/site-header.less'
import 'less/global/style.less'
import 'db/google-analytics'

const cx = classNames.bind(css)

class App extends Component {
  componentWillMount() {
    const { routes } = this.props

    pageTransition({ page: routes[1].name })
  }
  componentWillReceiveProps(nextProps) {
    const { routes } = this.props
    const nextPage = nextProps.routes[1].name

    if (routes[1].name !== nextPage) {
      pageTransition({ page: nextPage })
    }
  }
  render() {
    const { nav, page, open } = this.props

    return (
      <div className="site">
        <div className={cx({'overlay': open})} onClick={toggleMenu} />
        <Header open={open} page={page} nav={nav} />
        {this.props.children}
        <Footer page={page} />
      </div>
    )
  }
}

App.propTypes = {
  page: PropTypes.string,
  nav: PropTypes.array,
  open: PropTypes.bool,
  params: PropTypes.object
}

export default connect(
  state => ({
    page: state.site.page,
    nav: state.site.nav,
    open: state.site.open,
    params: state.site.params
  })
)(App)