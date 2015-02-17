var AppView = Backbone.View.extend({
	el: '.container',
	navTemplate: _.template($('#nav-template').html()),
	workTemplate: _.template($('#work-template').html()),
	bioTemplate: _.template($('#bio-template').html()),
	stackTemplate: _.template($('#stack-template').html()),
	fullStackTemplate: _.template($('#full-stack-template').html()),
	initialize: function() {
		bioCopy = new Copy(copy);
		projectsCollection = new ProjectsCollection(projects);
		techCollection = new TechCollection(technologies);
		contactsCollection = new ContactsCollection(links);
		portfolioView  = new PortfolioView({collection: projectsCollection});
		$('#portfolio').hide();
		this.addTech();
		this.setMain();
	},
	events: {
		'click .thumbnail': 'togglePortfolio',
		'click #footnote': 'toggleFact',
	},
	setMain: function() {
		$('#work').html(this.workTemplate);
		$('#bio').html(this.bioTemplate(bioCopy.toJSON()));
		$('#nav').html(this.navTemplate);
		$('.footnote').hide();
	},
	addTech: function() {
		techCollection.each(function(model) {
			$('#stack').html(this.fullStackTemplate(model.toJSON()));
		});
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
