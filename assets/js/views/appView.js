var AppView = Backbone.View.extend({
	el: '.container',
	navTemplate: _.template($('#nav-template').html()),
	workTemplate: _.template($('#work-template').html()),
	bioTemplate: _.template($('#bio-template').html()),
	stackTemplate: _.template($('#stack-template').html()),
	initialize: function() {
		projectsCollection = new ProjectsCollection(projects);
		techCollection = new TechCollection(technologies);
		contactsCollection = new ContactsCollection(contacts);
		copyCollection = new CopyCollection(siteCopy);
		portfolioView  = new PortfolioView({collection: projectsCollection});
		$('#portfolio').hide();
		this.setMain();
	},
	events: {
		'click .thumbnail': 'togglePortfolio',
		'click #footnote': 'toggleFact',
	},
	setMain: function() {
		$('#work').html(this.workTemplate);
		$('#bio').html(this.bioTemplate);
		$('#stack').html(this.stackTemplate);
		$('#nav').html(this.navTemplate);
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
