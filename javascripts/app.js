
$(function() {

	showContact();
	showPortfolio();
	


var bio = new Bio();
var contact = new Contact();
var portfolio = new Portfolio();
var stack = new Stack();
	

	function showContact() {
		$('#contact').hide();
		$('#contact-tab').on('click', function() {
			console.log('YIKES')
			$('#contact').toggle();
			});
	}

	function showPortfolio() {
	$('#portfolio').hide();
	$('#portfolio-tab').on('click', function() {
	$('#project').hide();
		console.log('fort polio')
		$('#portfolio').slideToggle();
		});
	}

	$('#ramen-button').on('click', function() {
		console.log('Ramen');
		$('#project').toggle();
	});

	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').slideToggle();
	});
	
	


});


console.log('app');