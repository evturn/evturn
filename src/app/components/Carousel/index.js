import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames/bind'

import Thumbnails from 'components/Thumbnails'
import Web from 'components/Web'

import css from './style.css'

const cx = classNames.bind(css)

class Carousel extends Component {
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
      <Web {...project} />
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
    )
  }
}

Carousel.propTypes = {
  thumbnails: PropTypes.array,
  id: PropTypes.number,
  project: PropTypes.object,
  images: PropTypes.array
}

const mapStateToProps = ({ slideshow }) => ({
  thumbnails: slideshow.nav,
  id: slideshow.id,
  project: slideshow.project,
  images: slideshow.images,
  active: slideshow.active,
  total: slideshow.total,
  projects: slideshow.projects
})

export default connect(mapStateToProps)(Carousel)

