var ev = ev || {};

function statCount() {
  $('.stat-count').each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });
}

function count($this){
  var current = parseInt($this.html(), 10);
  current = current + 50;
  $this.html(++current);
  if (current > $this.data('count')) {
    $this.html($this.data('count'));
  } else {    
    setTimeout(function() {
      count($this);
      }, 50);
  }
}

$(function() {
  $(window).load(function() {
    $('#preloader').delay(500).fadeOut();
    $('.preloader').delay(600).fadeOut('slow');
  });
});

var router = new ev.Router();
Backbone.history.start();

new WOW().init();