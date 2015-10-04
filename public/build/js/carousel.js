let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

let counter, next, length, timer;

function initCarousel() {
  length = $('.item').length;
  counter = null;
  next = null;
  clearInterval(timer);

  if (length < 2) {
      $('.item:nth-child(1)').addClass('active');
      return false;
  }
  else {
      nextImage();
      timer = setInterval(nextImage, 4000);
  }
};

function nextImage() {
  let isActiveLast = !!(counter === length),
      isNextLast = !!(next === length),
      isInitializing = !!(counter === null && next === null);

  if (isInitializing) {
      counter = 1;
      next = 2;
      $('.item:nth-child(' + counter + ')').addClass('active');
      $('.item:nth-child(' + next + ')').addClass('next');
      return false;
  }
  else if (isActiveLast) {
      counter = 1;
      next = 2;
  }
  else if (isNextLast) {
      counter += 1;
      next = 1;
  }
  else {
      counter += 1;
      next = counter + 1;
  }

  $('.active').fadeTo(1000, 0, function() {
    $('.item').removeClass('active');
  });

  $('.next').fadeTo(1000, 1, function() {
    $('.item').removeClass('next');
    $('.item:nth-child(' + counter + ')').addClass('active');
    $('.item:nth-child(' + next + ')').addClass('next');
  });
};

module.exports = initCarousel;