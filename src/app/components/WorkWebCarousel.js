import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initCarousel, performCleanUp } from 'actions/carousel';
import classNames from 'classnames/bind';
import css from 'less/components/work-web-carousel.less';

const cx = classNames.bind(css);

class WorkWebCarousel extends Component {
  componentDidMount() {
    const { images, dispatch } = this.props;
    dispatch(initCarousel(images));
  }
  componentWillReceiveProps(nextProps) {
    const { images, dispatch } = this.props;

    if (images !== nextProps.images) {
      dispatch(initCarousel(nextProps.images));
    }
  }
  componentWillUnmount() {
    performCleanUp();
  }
  render() {
    const { images } = this.props;

    const carouselSlides = (
      <div className={cx('carousel')}>{images.map(image =>
        <div key={image} className={cx('slide', this.assignClassName(image))}>
          <img className="img" src={image} />
        </div>
      )}</div>
    );

    return (
      <div className={cx('root')}>
        {carouselSlides}
      </div>
    );
  }
  assignClassName(image) {
    const { enter, leave, active } = this.props;

    switch (image) {
      case enter:
        return 'enter'
      case leave:
        return 'leave'
      case active:
        return 'active'
      default:
        return 'inactive'
    }
  }
}

WorkWebCarousel.propTypes = {
  images: PropTypes.array,
  enter: PropTypes.string,
  leave: PropTypes.string,
  active: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    enter: state.carousel.enter,
    leave: state.carousel.leave,
    active: state.carousel.active
  })
)(WorkWebCarousel);