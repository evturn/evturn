import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Video from 'components/Video'

import css from 'less/containers/home.less'

class Home extends Component {
  render() {

    return (
      <div
        className={css.root}
        style={{backgroundImage: `url(${require('site-images/banana-plants.png')})`}}>

        <div className={css.lg}>
          <Video />
          <div className={css.title}>
            <img src="dist/img/title-white.svg" />
            <div className={css.subtitle} />
          </div>
          <div className={css.overlay} />
        </div>

      </div>
    )
  }
}

Home.propTypes = {
  mobileNav: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  mobileNav: site.mobileNav
})

export default connect(mapStateToProps)(Home)
