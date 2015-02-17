var AppView = Backbone.View.extend({
	el: '.container',
	workTemplate: _.template($('#work-template').html()),
	bioTemplate: _.template($('#bio-template').html()),
	initialize: function() {
		bioCopy = new Copy(copy);
		projectsCollection = new ProjectsCollection(projects);
		stackCollection = new StackCollection(technologies);
		linksCollection = new LinksCollection(links);
		portfolioView  = new PortfolioView({collection: projectsCollection});
		$('#portfolio').hide();
		this.setStacks();
		this.setLinks();
		this.setMain();
	},
	events: {
		'click .thumbnail': 'togglePortfolio',
		'click #footnote': 'toggleFact',
	},
	setMain: function() {
		$('#work').html(this.workTemplate);
		$('#bio').html(this.bioTemplate(bioCopy.toJSON()));
		$('.footnote').hide();
	},
	addStack: function(model) {
		var view = new FullStackView({model: model});
		$('#stack-list').append(view.el)
	},
	setStacks: function() {
		stackCollection.each(function(model) {
			this.addStack(model);
		}.bind(this));
	},
	addLink: function(model) {
		var view = new LinkView({model: model});
		$('#link-list').append(view.el)
	},
	setLinks: function() {
		linksCollection.each(function(model) {
			this.addLink(model);
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
