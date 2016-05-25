import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import WorkWebDetails from 'components/WorkWebDetails'
import Thumbnails from 'components/Thumbnails'
import { createSlideshow, tearDownCarousel } from 'containers/Projects/actions'

import css from './style.less'

const cx = classNames.bind(css)

class Carousel extends Component {
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
    const {
      project,
      images,
      id,
      thumbnails
    } = this.props

    const carouselSlide = images ? (
      <div className={cx('carousel')}>
        <div className={cx('slides')}>{images.map((x, i)=>
          <div key={i} className={cx('slide', { 'active': x.active })}>
            <img src={x.src} />
          </div>
        )}</div>
      </div>
    ) : 'Loading...'

    const projectDetails = project ? (
      <WorkWebDetails {...project} />
    ) : '...'

    return (
      <div>

        <div className={cx('slideshow')}>
          {carouselSlide}
          {projectDetails}
        </div>

        <Thumbnails
          nav={thumbnails}
          id={id}
        />

      </div>
    );
  }
}

Carousel.propTypes = {
  params: PropTypes.object,
  project: PropTypes.object,
  images: PropTypes.array,
  id: PropTypes.number,
  thumbnails: PropTypes.array,
}

const mapStateToProps = ({ slideshow }) => ({
  project: slideshow.project,
  images: slideshow.images,
  active: slideshow.active,
  id: slideshow.id,
  total: slideshow.total,
  projects: slideshow.projects,
  thumbnails: slideshow.nav
})

const mapDispatchToProps = dispatch => ({
  createSlideshow: id => dispatch(createSlideshow(id)),
  tearDownCarousel: _ => dispatch(tearDownCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)

