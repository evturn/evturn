
$(function() {

	showPortfolio();
	
	var bio = new Bio();
	var contact = new Contact();
	var portfolio = new Portfolio();
	var stack = new Stack();
	var avatar = new Avatar();


	function showPortfolio() {
		// $('#portfolio').hide();
		$('#portfolio-tab').on('click', function() {
			console.log('fort polio')
			$('#portfolio').slideToggle();
			});
	}

	$('#ramen-button').on('click', function() {
		console.log('Ramen clicked');
		var ramenView = new RamenView();
	});

	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
	
	


});


console.log('app');