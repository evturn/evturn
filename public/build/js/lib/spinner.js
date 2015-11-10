'use strict';

module.exports = () => {
  const $container = $('#preloader');
  const $image = $('.preloader');
  $container.delay(500).fadeOut();
  $image.delay(600).fadeOut(600);
};