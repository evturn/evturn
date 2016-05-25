import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Thumbnails from 'components/Thumbnails'

import css from './style.less'

class Home extends Component {
  render() {
    const {
      thumbnails,
      id,
    } = this.props

    return (
      <div className={css.root}>

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
  id: PropTypes.number
}

const mapStateToProps = ({ slideshow, site }) => ({
  thumbnails: slideshow.nav,
  id: slideshow.id
})

export default connect(mapStateToProps)(Home)
