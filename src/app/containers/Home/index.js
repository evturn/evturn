import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { createSlideshow, tearDownCarousel } from 'containers/Projects/actions'
import Thumbnails from 'components/Thumbnails'

import css from './style.less'

class Home extends Component {
  componentWillMount() {
    const { createSlideshow, params } = this.props
    createSlideshow(params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { createSlideshow, params } = this.props

    if (params.id !== nextProps.params.id) {
      createSlideshow(nextProps.params.id)
    }
  }

  componentWillUnmount() {
    const { tearDownCarousel } = this.props
    tearDownCarousel()
  }

  render() {
    const { thumbnails, id } = this.props

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
  params: PropTypes.object,
  thumbnails: PropTypes.array,
  id: PropTypes.number
}

const mapStateToProps = ({ slideshow }) => ({
  thumbnails: slideshow.nav,
  id: slideshow.id
})

const mapDispatchToProps = dispatch => ({
  createSlideshow: id => dispatch(createSlideshow(id)),
  tearDownCarousel: _ => dispatch(tearDownCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
