'use strict';
const Compiler = require('./templates');

module.exports = function() {
  let $nav = $('.ev-nav');
  let $curtain = $('#curtain');

  const init = () => {
    render();

    $(document).on('click', '.burger-container', () => {
      expand();
    });

    $(document).on('click', '.close-container', () => {
      collapse();
    });

    $(document).on('click', '#curtain.on', () => {
      collapse();
    });

    $(document).on('click', '.nav-item a', () => {
      collapse();
    });
  };

  const expand = () => {
    $nav.removeClass('slideOutRight');
    $nav.addClass('on');
    $nav.addClass('slideInRight');
    $curtain.addClass('on');
    $curtain.fadeTo(1000, 0.3);
  };

  const collapse = () => {
    $nav.removeClass('slideInRight');
    $nav.addClass('slideOutRight');
    $curtain.fadeTo(500, 0);
    setTimeout(() => {
      $curtain.removeClass('on');
      $nav.removeClass('on');
    }, 500);
  };

  const render = () => {
    let navTemplate = Compiler.nav();
    $nav.html(navTemplate());
  };

  return init();
};