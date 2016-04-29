import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import WorkWebDetails from 'components/WorkWebDetails'
import { createSlideshow, tearDownCarousel } from 'actions/slideshow'
import classNames from 'classnames/bind'
import css from 'less/components/carousel.less'

const cx = classNames.bind(css);

class Carousel extends Component {
  subscription$;

  componentWillMount() {
    this.subscription$ = createSlideshow(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { params } = this.props

    if (params.id !== nextProps.params.id) {
      this.subscription$.dispose()
      this.subscription$ = createSlideshow(nextProps.params.id)
    }
  }

  componentWillUnmount() {
    tearDownCarousel(this.subscription$)
  }

  render() {
    const { project, images, id, nav } = this.props

    const carouselSlide = images ? (
      <div className={cx('carousel')}>
        <div className={cx('slides')}>{images.map((x, i)=>
          <div key={i} className={cx('slide', { 'active': x.active })}>
            <img src={x.src} />
          </div>
        )}</div>
      </div>
    ) : 'Loading...'

    const carouselNav = (
      <ul className={cx('nav')}>{nav.map(x =>
        <li key={x.id}
          className={cx('thumb', {'active': x.id === id})}>
          <Link to={`/work/web/${x.id}`}>
            <img src={x.src} />
            <div className={cx('overlay')} />
          </Link>
        </li>
      )}</ul>
    )

    const projectDetails = project ? (
      <WorkWebDetails {...project} />
    ) : '...'

    return (
      <div>
        <div className={cx('slideshow')}>
          {carouselSlide}
          {projectDetails}
        </div>
        {carouselNav}
      </div>
    );
  }
}

Carousel.propTypes = {
  params: PropTypes.object,
  project: PropTypes.object,
  images: PropTypes.array,
  id: PropTypes.number,
  nav: PropTypes.array,
}

export default connect(
  state => ({
    project: state.slideshow.project,
    images: state.slideshow.images,
    active: state.slideshow.active,
    id: state.slideshow.id,
    total: state.slideshow.total,
    projects: state.slideshow.projects,
    nav: state.slideshow.nav
  })
)(Carousel)