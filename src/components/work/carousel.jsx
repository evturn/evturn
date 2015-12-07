'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery';

export const Carousel = React.createClass({
  init() {
    this.$images = $('.carousel__item-image');
    this.counter = null;
    this.images = this.props.images;
    console.log('CAROUSEL', this.images);
    this.total = this.images.length;

    if (this.total === 1) { return this.lock(); }

    this.cycle();
    this.timer = setInterval(() => this.cycle(), 4000);
  },
  lock() {
    const $image = $('.carousel__item-image:nth-child(1)');

    $image.addClass('active');
    return this;
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
    $(`.carousel__item-image:nth-child(${this.counter})`).addClass('active');
    $(`.carousel__item-image:nth-child(${this.next})`).addClass('next');
  },
  dissolve() {
    const $active = $('.active');
    const $next = $('.next');

    $active.fadeTo(1000, 0, () => {
      this.$images.removeClass('active');
    });

    $next.fadeTo(1000, 1, () => {
      this.$images.removeClass('next');
      this.nextImage();
    });
  },
  render() {
    const { images } = this.props;
    this.init();

    return (
      <div className="carousel">
        {
          images.map((result) => {
            console.log('CAROUSEL RESULT', result);
            return (
              <div
              ref={ (image) => this.image = image }
              key={ result }
              className="carousel__item-image">
                <img className="img-scale" src={ result } />
              </div>
            );
          })
        }
      </div>
    );
  }
});