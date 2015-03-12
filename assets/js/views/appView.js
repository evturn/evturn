var AppView = Backbone.View.extend({
	bioTemplate: _.template($('#bio-template').html()),
	initialize: function() {
		var projectsCollection = new ProjectsCollection(projects);
		var portfolioView  		 = new PortfolioView({collection: projectsCollection});
		stackCollection 			 = new StackCollection(technologies);
		linksCollection 			 = new LinksCollection(links);
		this.setMain();
	},
	events: {},
	setMain: function() {
		this.setBio();
		this.setStacks();
		this.setLinks();
	},
	setBio: function() {
		var bioCopy = new Copy(copy);
		var lead = bioCopy.get('lead');
		$('#bio').html(this.bioTemplate(bioCopy.toJSON()));
		$('.lead').append(lead);
	},
	setStacks: function() {
		stackCollection.each(function(model) {
			this.addStack(model);
		}.bind(this));
	},
	setLinks: function() {
		linksCollection.each(function(model) {
			this.addLink(model);
		}.bind(this));
	},
	addStack: function(model) {
		var view = new FullStackView({model: model});
		$('#stack').append(view.el)
	},
	addLink: function(model) {
		var view = new LinkView({model: model});
		$('#contact').append(view.el)
	},
});
