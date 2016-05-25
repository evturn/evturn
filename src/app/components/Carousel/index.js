import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import WorkWebDetails from 'components/WorkWebDetails'

import css from './style.less'

const cx = classNames.bind(css)

class Carousel extends Component {
  render() {
    const {
      project,
      images,
      id,
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
      <div className={cx('slideshow')}>
        {carouselSlide}
        {projectDetails}
      </div>
    )
  }
}

Carousel.propTypes = {
  project: PropTypes.object,
  images: PropTypes.array
}

const mapStateToProps = ({ slideshow }) => ({
  project: slideshow.project,
  images: slideshow.images,
  active: slideshow.active,
  total: slideshow.total,
  projects: slideshow.projects,

})

const mapDispatchToProps = dispatch => ({
  createSlideshow: id => dispatch(createSlideshow(id)),
  tearDownCarousel: _ => dispatch(tearDownCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)

