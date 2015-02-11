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
		$('#portfolio-button').on('click', function() {
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

	$('#hangman-button').on('click', function() {
		new HangmanView();
	});

	$('#ttt-button').on('click', function() {
		new TTT();
	});


	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
});
