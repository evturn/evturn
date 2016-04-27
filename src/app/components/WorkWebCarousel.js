import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateActiveSlide, unmountSlideshow } from 'actions/slideshow';
import classNames from 'classnames/bind';
import css from 'less/components/work-web-carousel.less';

const cx = classNames.bind(css);

class WorkWebCarousel extends Component {
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
    const { slides } = this.props;

    return (
      <div className={cx('root')}>
        <div className={cx('carousel')}>{slides.items.map((item, i)=>
          <div key={i} className={cx('slide', { 'active': slides.active === i})}>
            <img className="img" src={item}/>
          </div>
        )}</div>
      </div>
    );
  }
}

WorkWebCarousel.propTypes = {
  slides: PropTypes.object,
  active: PropTypes.number,
  presentations: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    slides: state.slideshow.slides,
    active: state.slideshow.slides.active,
    presentations: state.slideshow.presentations
  })
)(WorkWebCarousel);

