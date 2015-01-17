new Bio();
new Contact();
new AlculatorView();
new Stack();
new Avatar();
new Portfolio();

$(function() {
	
	showPortfolio();

	function showPortfolio() {
		$('#portfolio').hide();
		$('#portfolio-tab').on('click', function() {
			var alculatorView = new AlculatorView();
			$('#portfolio').slideToggle();
		});
	};

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

	$('#marshallz-button').on('click', function() {
		new MarshallzView();
	});

	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
});
