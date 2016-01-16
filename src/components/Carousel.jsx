import React from 'react';
import CarouselStore from 'stores/CarouselStore';
import CarouselActions from 'actions/CarouselActions';
import classNames from 'classnames/bind';
import styles from 'styles/components/carousel.less';

const cx = classNames.bind(styles);

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.images !== nextProps.images) {
      CarouselActions.insertImageGroup(nextProps.images);
    }
  }
  componentWillUnmount() {
    CarouselActions.performCleanUp();
  }
  componentWillMount() {
    CarouselActions.insertImageGroup(this.props.images);
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
  renderSlides(images) {
    return this.props.images.map((image, i) => {
      const classname = CarouselStore.getClassname(image);

      return (
        <div key={i} className={cx('slide', classname)}>
          <img src={image} />
        </div>
      );
    });
  }
}