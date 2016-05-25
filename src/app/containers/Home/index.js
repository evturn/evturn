import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Thumbnails from 'components/Thumbnails'

import css from './style.less'

class Home extends Component {
  render() {
    const {
      thumbnails,
      id,
      hex
    } = this.props

    return (
      <div
        className={css.root}
        style={{ backgroundColor: hex }}>

        {this.props.children}

        <Thumbnails
          nav={thumbnails}
          id={id}
        />

      </div>
    )
  }
}

Home.propTypes = {
  children: React.PropTypes.node,
  thumbnails: PropTypes.array,
  id: PropTypes.number,
  hex: PropTypes.string
}

const mapStateToProps = ({ slideshow, site }) => ({
  thumbnails: slideshow.nav,
  id: slideshow.id,
  hex: site.hex
})

export default connect(mapStateToProps)(Home)
