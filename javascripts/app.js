
$(function() {
	showBio();
	showContact();
	showPortfolio();


var bio = new Bio();
var contact = new Contact();
var portfolio = new Portfolio();
	

	function showBio() {
		$('#bio').hide();
		$('#bio-tab').on('click', function() {
			$('#bio').toggle();
			});
	}

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
		console.log('fort polio')
		$('#portfolio').toggle();
		});
	}

	function showProject() {
	$('#project').hide();
	$('#ramen-button').on('click', function() {
		console.log('Ramen?')
		$('#project').toggle();
		});
	}


});


console.log('app');