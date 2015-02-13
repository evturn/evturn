var AppView = Backbone.View.extend({
	el: '#wrapper',
	bioTemplate: _.template($('#bio-template').html()),
	stackTemplate: _.template($('#stack-template').html()),
	avatarTemplate: _.template($('#avatar-template').html()),
	contactTemplate: _.template($('#contact-template').html()),
	navbarTemplate: _.template($('#navbar-template').html()),
	initialize: function() {
		this.setMain();
	},
	events: {
		'click #portfolio-button': 'togglePortfolio',
		'click #footnote': 'toggleFact',
	},
	setMain: function() {
		$('#bio').html(this.bioTemplate);
		$('#stack').html(this.stackTemplate);
		$('#avatar').html(this.avatarTemplate);
		$('#contact').html(this.contactTemplate);
		$('#navbar').html(this.navbarTemplate);
	},
	togglePortfolio: function(e) {
		e.preventDefault();
		$('#portfolio').slideToggle();
	},
	toggleFact: function(e) {
		e.preventDefault();
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	},
});