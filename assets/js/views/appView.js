var AppView = Backbone.View.extend({

	bioTemplate: _.template($('#bio-template').html()),
	initialize: function() {
		projectsCollection = new ProjectsCollection(projects);
		portfolioView  = new PortfolioView({collection: projectsCollection});
		stackCollection = new StackCollection(technologies);
		linksCollection = new LinksCollection(links);
		this.setMain();
	},
	events: {},
	setMain: function() {
		this.setBio();
		this.setStacks();
		this.setLinks();
	},
	setBio: function() {
		bioCopy = new Copy(copy);
		lead = bioCopy.get('lead');
		$('#bio').html(this.bioTemplate(bioCopy.toJSON()));
		$('.lead').append(lead);
	},
	addStack: function(model) {
		var view = new FullStackView({model: model});
		$('#stack').append(view.el)
	},
	setStacks: function() {
		stackCollection.each(function(model) {
			this.addStack(model);
		}.bind(this));
	},
	addLink: function(model) {
		var view = new LinkView({model: model});
		$('#contact').append(view.el)
	},
	setLinks: function() {
		linksCollection.each(function(model) {
			this.addLink(model);
		}.bind(this));
	},
	toggleFact: function(e) {
		e.preventDefault();
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	},
});
