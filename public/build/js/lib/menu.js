'use strict';
module.exports = () => {
  const $navTrigger = $('.site-nav__trigger');
  const $menuClose = $('.site-menu__close');
  const $menu = $('.site-menu');

  $navTrigger.on('click', () => {
    console.log('clickity');
    $menu.addClass('open');
  });

  $menuClose.on('click', () => {
    $menu.removeClass('open');
  });
};