import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import WorkWebDetails from 'components/WorkWebDetails'
import { updateActiveSlide, unmountSlideshow } from 'actions/slideshow'
import classNames from 'classnames/bind'
import css from 'less/components/carousel.less'

const cx = classNames.bind(css);

class Carousel extends Component {
  componentDidMount() {
    const { dispatch, slides } = this.props;

    dispatch(updateActiveSlide(slides))
  }
  componentWillReceiveProps(nextProps) {
    const { dispatch, slides } = this.props;

    if (slides.items !== nextProps.slides.items) {
      dispatch(updateActiveSlide(nextProps.slides))
    }
  }
  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(unmountSlideshow());
  }
  render() {
    const { slides, project, nav } = this.props;

    const carouselSlide = (
      <div className={cx('root')}>
        <div className={cx('carousel')}>{slides.items.map((x, i)=>
          <div key={i} className={cx('slide', { 'active': slides.active === i})}>
            <img src={x}/>
          </div>
        )}</div>
      </div>
    )

    const carouselNav = (
      <ul className={cx('projects')}>{nav.map(x =>
        <li key={x.id} className={cx('thumb', {'active': x.id === project.id})}>
          <Link to={`/work/web/${x.id}`}>
            <img src={x.image} />
            <div className={cx('overlay')} />
          </Link>
        </li>
      )}</ul>
    )

    return (
      <div>
        <div className={cx('project')}>
          {carouselSlide}
          <WorkWebDetails {...project} />
        </div>
        {carouselNav}
      </div>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.object,
  active: PropTypes.number,
  project: PropTypes.object,
  projects: PropTypes.array,
  nav: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    slides: state.slideshow.slides,
    active: state.slideshow.slides.active,
    project: state.slideshow.project,
    projects: state.slideshow.projects,
    nav: state.slideshow.nav
  })
)(Carousel);

