var router = new Router();
Backbone.history.start();

function count($this){
  var current = parseInt($this.html(), 10);
  current = current + 50;
  $this.html(++current);
  if (current > $this.data('count')) {
    $this.html($this.data('count'));
  } else {    
    setTimeout(function() {
      count($this)
      }, 50);
  }
}

new WOW().init();

$(function() {

	$(window).load(function() {
		$("#preloader").delay(500).fadeOut();
		$(".preloader").delay(600).fadeOut("slow");
	});
   
});