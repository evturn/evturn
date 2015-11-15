'use strict';
let counter, next, length, timer;

module.exports = class Carousel {
  constructor() {
    this.images = null;
    this.total = null;
    this.counter = null;
    this.timer = null;

    this.init();
  }
  init() {
    this.images = $('.carousel__item-image');
    this.total = this.images.length;

    if (this.total < 2) {
      return this.lock();
    } else {
      return this.start();
    }
  }
  lock() {
    const $image = $('.carousel__item-image:nth-child(1)');
    $image.addClass('active');
  }
  start() {
    this.cycle();
    this.timer = setInterval(() => { this.cycle(); }, 4000);
    return this.timer;
  }
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
  }
  nextImage() {
    $(`.carousel__item-image:nth-child(${this.counter})`).addClass('active');
    $(`.carousel__item-image:nth-child(${this.next})`).addClass('next');
  }
  dissolve() {
    const $active = $('.active');
    const $next = $('.next');

    $active.fadeTo(1000, 0, () => {
      this.images.removeClass('active');
    });

    $next.fadeTo(1000, 1, () => {
      this.images.removeClass('next');
      this.nextImage();
    });
  }
};