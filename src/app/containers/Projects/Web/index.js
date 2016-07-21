import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {
  createSlideshow,
  tearDownCarousel
} from 'containers/Projects/actions'

import Details from './Details'
import Carousel from './Carousel'
import Thumbnails from './Thumbnails'

import css from './style.css'

class Web extends Component {
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

  render () {
    const { images, nav, project, id } = this.props

    return (
      <div>
        <div className={css.slideshow}>
          {images ? <Carousel images={images} /> : null}
          {project ? <Details {...project} /> : null}
        </div>

        <Thumbnails
          nav={this.props.nav}
          id={this.props.id}
        />
      </div>
    )
  }
}

Web.propTypes = {
  nav: PropTypes.array,
  id: PropTypes.number,
  project: PropTypes.object,
  images: PropTypes.array
}

const mapStateToProps = ({ slideshow }) => ({
  nav: slideshow.nav,
  id: slideshow.id,
  project: slideshow.project,
  images: slideshow.images
})

const mapDispatchToProps = dispatch => ({
  createSlideshow: id => dispatch(createSlideshow(id)),
  tearDownCarousel: _ => dispatch(tearDownCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Web)
