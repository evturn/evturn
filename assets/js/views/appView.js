var AppView = Backbone.View.extend({
	el: '#wrapper',
	stackTemplate: _.template($('#stack-template').html()),
	contactTemplate: _.template($('#contact-template').html()),
	navbarTemplate: _.template($('#navbar-template').html()),
	initialize: function() {
		contactsCollection = new ContactsCollection(contacts);
		copyCollection = new CopyCollection(siteCopy);
		this.setMain();
	},
	events: {
		'click #portfolio-button': 'togglePortfolio',
		'click #footnote': 'toggleFact',
	},
	setMain: function() {
		$('#contact').html(this.contactTemplate);
		$('#stack').html(this.stackTemplate);
		$('#navbar').html(this.navbarTemplate);
		$('.footnote').hide();
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