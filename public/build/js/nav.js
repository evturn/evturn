let Compiler = require('./templates');

module.exports = function() {
  let expand = function() {
    $('.ev-nav').removeClass('slideOutRight');
    $('.ev-nav').addClass('on');
    $('.ev-nav').addClass('slideInRight');
    $('#curtain').addClass('on');
    $('#curtain').fadeTo(1000, 0.3);
  };

  let collapse = function() {
    $('.ev-nav').removeClass('slideInRight');
    $('.ev-nav').addClass('slideOutRight');
    $('#curtain').fadeTo(500, 0);
    setTimeout(() => {
      $('#curtain').removeClass('on');
      $('.ev-nav').removeClass('on');
    }, 500);
  };

  let render = function() {
    let navTemplate = Compiler.nav();
    $('.ev-nav').html(navTemplate());
  };

  let events = function() {
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

  let init = function() {
    render();
    events();
  };

  return init();
};