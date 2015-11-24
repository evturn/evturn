'use strict';
exports = module.exports = Carousel;

const proto = {
    init: function init(images) {
      this.$images = $('.carousel__item-image');
      this.counter = null;
      this.images = images;
      this.total = images.length;

      if (this.total === 1) { return this.lock(); }

      this.cycle();
      this.timer = setInterval(() => this.cycle(), 4000);
    },
    lock: function lock() {
      const $image = $('.carousel__item-image:nth-child(1)');

      $image.addClass('active');
      return this;
    },
    reset: function reset() {
      return clearInterval(this.timer);
    },
    cycle: function cycle() {
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
    nextImage: function nextImage() {
      $(`.carousel__item-image:nth-child(${this.counter})`).addClass('active');
      $(`.carousel__item-image:nth-child(${this.next})`).addClass('next');
    },
    dissolve: function dissolve() {
      const $active = $('.active');
      const $next = $('.next');

      $active.fadeTo(1000, 0, () => {
        this.$images.removeClass('active');
      });

      $next.fadeTo(1000, 1, () => {
        this.$images.removeClass('next');
        this.nextImage();
      });
    }
  };

function Carousel(images) {
  const carousel = {};

  _.extend(carousel, proto);
  carousel.init(images);
  return carousel;
};