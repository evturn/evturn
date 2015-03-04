router = new Router();

$(window).load(function() {
    $("#preloader").delay(500).fadeOut();
    $(".preloader").delay(600).fadeOut("slow");
});

$(function() {
	$('#tooltip').tooltip()
});

$('.open').on('click', function(e) {
		e.preventDefault();
		$('#portfolio').slideToggle('slow');
	});