'use strict';
let counter, next, length, timer;

const init = () => {
  let $images = $('.item');
  let $firstImage = $('.item:nth-child(1)');
  length = $images.length;
  counter = null;
  next = null;
  clearInterval(timer);

  if (length < 2) {
    $firstImage.addClass('active');
    return;
  } else {
    cycle();
    timer = setInterval(cycle, 4000);
  }
};

const cycle = () => {
  let $images = $('.item');
  let $active = $('.active');
  let $next = $('.next');
  let isActiveLast = !!(counter === length);
  let isNextLast = !!(next === length);
  let isInitializing = !!(counter === null && next === null);

  if (isInitializing) {
    counter = 1;
    next = 2;
    $(`.item:nth-child(${counter})`).addClass('active');
    $(`.item:nth-child(${next})`).addClass('next');
    return;
  } else if (isActiveLast) {
    counter = 1;
    next = 2;
  } else if (isNextLast) {
    counter += 1;
    next = 1;
  } else {
    counter += 1;
    next = counter + 1;
  }

  $active.fadeTo(1000, 0, () => {
    $images.removeClass('active');
  });

  $next.fadeTo(1000, 1, () => {
    $images.removeClass('next');
    $(`.item:nth-child(${counter})`).addClass('active');
    $(`.item:nth-child(${next})`).addClass('next');
  });
};

module.exports = init;