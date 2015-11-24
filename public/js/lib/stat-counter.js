'use strict';
exports = module.exports = StatCounter;

const proto = {
  init: function init() {
    this.$counters = $('.stat-count');
    this.animate();
  },
  increment: function increment($element) {
    let current = parseInt($element.html(), 10);

    current = current + 50;
    $element.html(++current);
    if (current > $element.data('count')) {
      $element.html($element.data('count'));
    } else {
      setTimeout(() => this.increment($element), 50);
    }
  },
  animate: function animate() {
    this.$counters.each((index, element) => {
      const $element = $(element);

      $element.data('count', parseInt($element.html(), 10));
      $element.html('0');
      this.increment($element);
    });
  }
};

function StatCounter() {
  const statCounter = {};

  _.extend(statCounter, proto);
  statCounter.init();
  return statCounter;
};