import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import WorkWebDetails from 'components/WorkWebDetails'
import { loadSlideshow, updateActiveSlide, unmountSlideshow } from 'actions/slideshow'
import classNames from 'classnames/bind'
import css from 'less/components/carousel.less'

const cx = classNames.bind(css);

class Carousel extends Component {
  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(unmountSlideshow());
  }
  render() {
    const { dispatch, project, active, items, id, nav } = this.props;

    const carouselSlide = (
      <div className={cx('root')}>
        <div className={cx('carousel')}>{items.map((x, i)=>
          <div key={i} className={cx('slide', { 'active': i === active || 0})}>
            <img src={x}/>
          </div>
        )}</div>
      </div>
    )

    const carouselNav = (
      <ul className={cx('projects')}>{nav.map(x =>
        <li key={x.id}
          className={cx('thumb', {'active': x.id === id})}
          onClick={()=> dispatch(loadSlideshow(x.id))}>

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
  project: PropTypes.object,
  items: PropTypes.array,
  active: PropTypes.number,
  id: PropTypes.number,
  total: PropTypes.number,
  projects: PropTypes.array,
  nav: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    project: state.slideshow.project,
    items: state.slideshow.items,
    active: state.slideshow.active,
    id: state.slideshow.id,
    total: state.slideshow.total,
    projects: state.slideshow.projects,
    nav: state.slideshow.nav
  })
)(Carousel);