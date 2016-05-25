import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Thumbnails from 'components/Thumbnails'

import css from './style.less'

class Home extends Component {
  render() {
    const { thumbnails } = this.props

    return (
      <div className={css.root}>
        {this.props.children}
        <Thumbnails nav={thumbnails} />
      </div>
    )
  }
}

Home.propTypes = {
  thumbnails: PropTypes.array
}

const mapStateToProps = ({ slideshow }) => ({
  thumbnails: slideshow.nav,
})

export default connect(mapStateToProps)(Home)
