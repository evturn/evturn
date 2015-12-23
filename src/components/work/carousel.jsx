'use strict';
import React from 'react';

import CSSModules from 'react-css-modules';
import css from './carousel.pre';

const CarouselSlide = React.createClass({
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
    const activeClass = this.state.active ? css.active : '';

    return (
      <div className={`${css.item} ${activeClass}`}>
        <img className="img-scale" src={this.props.image} />
      </div>
    );
  }
});

const Carousel = React.createClass({
  changeSlide() {
    let enqueueState = this.state.enqueue;
    let counterState = this.state.counter;
    let totalState = this.state.total;

    let counter;
    let enqueue;

    if (enqueueState < totalState && counterState !== totalState) {
      counter = counterState +=1;
      enqueue = enqueueState +=1;
    } else if (enqueueState === totalState) {
      counter = counterState +=1;
      enqueue = 0;
    } else if (enqueueState === 0) {
      counter = 0;
      enqueue = counter + 1
    }

    return this.setState({
      counter: counter,
      enqueue: enqueue,
      active: this.state.images[counter],
      next: this.state.images[enqueue]
    });
  },
  setTimer() {
    this.timer = setInterval(() => { this.changeSlide(); }, 4000);
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
      slug: this.props.slug,
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
      slug: newProps.slug
    });
    this.setTimer();
  },
  render() {
    return (
      <div className={css.root}>
        {this.props.images.map((image, i) => {
          const activeClass = image === this.state.active ? true : false;
          const nextClass = image === this.state.next ? true : false;

          return <CarouselSlide key={i} active={activeClass} next={nextClass} image={image}/>;
        }) }
      </div>
    );
  }
});

export default CSSModules(Carousel, css);