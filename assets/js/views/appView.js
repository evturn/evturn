var AppView = Backbone.View.extend({
	el: '.container',
	navTemplate: _.template($('#nav-template').html()),
	workTemplate: _.template($('#work-template').html()),
	bioTemplate: _.template($('#bio-template').html()),
	initialize: function() {
		bioCopy = new Copy(copy);
		projectsCollection = new ProjectsCollection(projects);
		techCollection = new TechCollection(technologies);
		contactsCollection = new ContactsCollection(links);
		portfolioView  = new PortfolioView({collection: projectsCollection});
		$('#portfolio').hide();
		this.setStacks();
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
	addStack: function(model) {
		var view = new FullStackView({model: model});
		$('#stack-list').append(view.el)
	},
	setStacks: function() {
		techCollection.each(function(model) {
			this.addStack(model);
		}.bind(this));
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
