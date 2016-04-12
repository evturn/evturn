import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initCarousel, performCleanUp } from 'actions/slideshow';
import classNames from 'classnames/bind';
import css from 'less/components/work-web-carousel.less';

const cx = classNames.bind(css);

class WorkWebCarousel extends Component {
  componentDidMount() {
    const { items, dispatch } = this.props;
    dispatch(initCarousel(items));
  }
  componentWillReceiveProps(nextProps) {
    const { items, dispatch } = this.props;

    if (items !== nextProps.items) {
      dispatch(initCarousel(nextProps.items));
    }
  }
  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(performCleanUp());
  }
  render() {
    const { items } = this.props;

    const carouselSlides = (
      <div className={cx('carousel')}>{items.map(image =>
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
  slides: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    slides: state.slideshow.slides
  })
)(WorkWebCarousel);