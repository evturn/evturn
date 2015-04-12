/* ==============================================
    Backbone
=============================================== */

new AppView();


/* ==============================================
    Animations
=============================================== */

new WOW({offset: -30}).init();


/* ==============================================
    Tooltip
=============================================== */

$(function() {
	
	$('#tooltip').tooltip()

	$(window).load(function() {
		$("#preloader").delay(500).fadeOut();
		$(".preloader").delay(600).fadeOut("slow");
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1) {
			$('.dmtop').css({bottom:"25px"});
		} else {
  		$('.dmtop').css({bottom:"-100px"});
		}
	});

	$('.dmtop').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});

});

function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 50;
    $this.html(++current);
    if(current > $this.data('count')){
      $this.html($this.data('count'));
    } 
    else {    
      setTimeout(function(){count($this)}, 50);
    }
  }        
    
$(".stat-count").each(function() {
  $(this).data('count', parseInt($(this).html(), 10));
  $(this).html('0');
  count($(this));
});