'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const ProjectCarousel = React.createClass({
  init() {
    this.total = document.getElementsByClassName('carousel__item-image').length;
    this.counter = null;
    this.cycle();
    this.timer = setInterval(() => this.cycle(), 4000);
  },
  reset() {
    return clearInterval(this.timer);
  },
  cycle() {
    const isActiveLast = !!(this.counter === this.total);
    const isNextLast = !!(this.next === this.total);
    const isInitializing = !!(this.counter === null);

    if (isInitializing) {
      this.counter = 1;
      this.next = 2;
      return this.nextImage();
    } else if (isActiveLast) {
      this.counter = 1;
      this.next = 2;
    } else if (isNextLast) {
      this.counter += 1;
      this.next = 1;
    } else {
      this.counter += 1;
      this.next = this.counter + 1;
    }
    return this.dissolve();
  },
  nextImage() {
    const all = document.getElementsByClassName('carousel__item-image');
    const active = document.getElementsByClassName('carousel__item-image')[this.counter - 1];
    const next = document.getElementsByClassName('carousel__item-image')[this.next - 1];

    $(all).removeClass('active');
    $(all).removeClass('next');
    $(active).addClass('active');
    $(next).addClass('next');
  },
  dissolve() {
    const active = document.getElementsByClassName('active');
    const next = document.getElementsByClassName('next');

    $(active).fadeTo(1000, 0);
    $(next).fadeTo(1000, 1, () => this.nextImage());
  },
  componentWillUnmount() {
    return this.reset();
  },
  componentWillReceiveProps() {
    this.reset();
    this.setState({
      images: this.props.images,
    });
    return this.init();
  },
  componentDidMount() {
    this.setState({
      images: this.props.images,
    });
    return this.init();
  },
  render() {
    return (
      <div className="carousel" id="carousel">
        { this.props.images.map((result) => {
            return (
              <div key={ result } className="carousel__item-image">
                <img className="img-scale" src={ result } />
              </div>
            );
        }) }
      </div>
    );
  }
});