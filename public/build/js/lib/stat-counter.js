'use strict';
const incrementStats = ($element) => {
  let current = parseInt($element.html(), 10);
  current = current + 50;
  $element.html(++current);

  if (current > $element.data('count')) {
    $element.html($element.data('count'));
  } else {
    setTimeout(() => { incrementStats($element); }, 50);
  }
};

const animateStats = module.exports = () => {
  const $counters = $('.stat-count');

  $counters.each((index, element) => {
    const $element = $(element);
    $element.data('count', parseInt($element.html(), 10));
    $element.html('0');
    incrementStats($element);
  });
};