new Bio();
new Contact();
new MarshallzView();
new Stack();
new Avatar();
new Portfolio();

$(function() {
	
	showPortfolio();

	function showPortfolio() {
		$('#portfolio').hide();
		$('#portfolio-tab').on('click', function() {
			var marshallzView = new MarshallzView();
			$('#portfolio').slideToggle();
		});
	};

	$('#marshallz-button').on('click', function() {
		new MarshallzView();
	});

	$('#alculator-button').on('click', function() {
		new AlculatorView();
	});

	$('#ramen-button').on('click', function() {
		new RamenView();
	});

	$('#gamez-button').on('click', function() {
		new GamezView();
	});

	$('#maxwells-button').on('click', function() {
		new MaxwellsView();
	});


	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
});
