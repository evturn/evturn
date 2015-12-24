'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './carousel.pre';

const CarouselSlide = CSSModules(React.createClass({
  getInitialState() {
    return {
      active: this.props.active,
      next: this.props.next
    };
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      active: newProps.active,
      next: newProps.next
    });
  },
  render() {
    const {
      image,
      active
    } = this.props;

    const activeClass = active ? 'active' : 'slide';

    return (
      <div styleName={activeClass}>
        <img className="img-scale" src={image} />
      </div>
    );
  }
}), styles);

const Carousel = React.createClass({
  rotateSlide() {
    return this.setState({
      active: this.state.images[this.state.counter],
      next: this.state.images[this.state.enqueue]
    });
  },
  onSlideChange() {
    if (this.state.enqueue < this.state.total && this.state.counter !== this.state.total) {
      this.showNextSlide();
    } else if (this.state.enqueue === this.state.total) {
      this.showLastSlide();
    } else if (this.state.enqueue === 0) {
      this.showFirstSlide();
    }

    this.rotateSlide();
  },
  showFirstSlide() {
    return this.setState({
      counter: 0,
      enqueue: 1,
    });
  },
  showNextSlide() {
    return this.setState({
      counter: this.state.counter + 1,
      enqueue: this.state.enqueue + 1,
    });
  },
  showLastSlide() {
    return this.setState({
      counter: this.state.counter + 1,
      enqueue: 0,
    });
  },
  setTimer() {
    this.timer = setInterval(() => {
      this.onSlideChange();
    }, 4000);
  },
  clearTimer() {
    return clearInterval(this.timer);
  },
  getDefaultProps() {
    return {
      counter: 0,
      enqueue: 1
    };
  },
  getInitialState() {
    return {
      counter: this.props.counter,
      enqueue: this.props.enqueue,
      total: this.props.images.length - 1,
      images: this.props.images,
      active: this.props.images[this.props.counter],
      next: this.props.images[this.props.enqueue],
      timer: null
    };
  },
  componentWillUnmount() {
    return this.clearTimer();
  },
  componentDidMount() {
    return this.setTimer();
  },
  componentWillReceiveProps(newProps) {
    this.clearTimer();
    this.setState({
      counter: 0,
      enqueue: 1,
      total: newProps.images.length - 1,
      images: newProps.images,
      active: newProps.images[0],
      next: newProps.images[1],
    });
    this.setTimer();
  },
  render() {
    return (
      <div styleName='root'>
        {this.props.images.map((image, i) => {
          const isActive = image === this.state.active ? true : false;
          const isNext = image === this.state.next ? true : false;

          return (
            <CarouselSlide
              key={i}
              active={isActive}
              next={isNext}
              image={image} />
          );
        })}
      </div>
    );
  }
});

export default CSSModules(Carousel, styles);