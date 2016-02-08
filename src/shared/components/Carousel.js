import React, { Component, PropTypes } from 'react';
// import CarouselStore from 'stores/CarouselStore';
// import CarouselActions from 'actions/CarouselActions';
import { connect } from 'react-redux';
import { init, performCleanUp, assignClassName } from 'actions/carousel';
import classNames from 'classnames/bind';
import styles from 'css/components/carousel.less';

const cx = classNames.bind(styles);

class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    performCleanUp();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.images !== nextProps.images) {
      init(nextProps.images);
    }
  }
  componentDidMount() {
    console.log(this.props.images);
    init(this.props.images);
  }
  render() {
    const slides = this.renderSlides(this.props.images);

    return (
      <div className={cx('project-carousel')}>
        <div className={cx('carousel')}>
          {this.renderSlides()}
        </div>
      </div>
    );
  }
  renderSlides() {
    return this.props.images.map((image, i) => {
      let classname;
      if (image === this.props.enter) {
        classname = 'enter';
      } else if (image === this.props.leave) {
        classname = 'leave';
      } else if (image === this.props.active) {
        classname = 'active';
      } else {
        classname = 'inactive';
      }

      return (
        <div key={i} className={cx('slide', classname)}>
          <img src={image} />
        </div>
      );
    });
  }
}

Carousel.propTypes = {
  images: PropTypes.array,
  enter: PropTypes.string,
  leave: PropTypes.string,
  active: PropTypes.string
};

function mapStateToProps(state) {
  return {
    enter: state.carousel.enter,
    leave: state.carousel.leave,
    active: state.carousel.active
  }
}

export default connect(mapStateToProps)(Carousel);