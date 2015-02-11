new AppView();
portfolioView  = new PortfolioView();
$('#portfolio').hide();


	$('.carousel').carousel({
		interval: 1000
	});

$(function() {
	
	



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
