
$(function() {

	showPortfolio();
	
	var bio = new Bio();
	var contact = new Contact();
	var portfolio = new Portfolio();
	var stack = new Stack();
	var avatar = new Avatar();


	function showPortfolio() {
		$('#portfolio').hide();
		$('#portfolio-tab').on('click', function() {
			console.log('fort polio')
			$('#portfolio').slideToggle();
			});
	}

	$('#alculator-button').on('click', function() {
		console.log('Alc clicked');
		var alculatorView = new AlculatorView();
	});

	$('#ramen-button').on('click', function() {
		console.log('Ramen clicked');
		var ramenView = new RamenView();
	});

	$('#gamez-button').on('click', function() {
		console.log('Gamez clicked');
		var gamezView = new GamezView();
	});

	$('#maxwells-button').on('click', function() {
		console.log('Maxwells clicked');
		var maxwellsView = new MaxwellsView();
	});

	$('#marshallz-button').on('click', function() {
		console.log('Marshallz clicked');
		var marshallzView = new MarshallzView();
	});

	$('#sad-button').on('click', function() {
		console.log('Sad clicked');
		var sadView = new SadView();
	});

	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
	
	


});


console.log('app');