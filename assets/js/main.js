new AppView();
portfolioView  = new PortfolioView();
$('#portfolio').hide();


	$('.carousel').carousel({
		interval: 1000
	});

$(function() {

	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
});
