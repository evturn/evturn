var AppView = Backbone.View.extend({
	bioTemplate: _.template($('#bio-template').html()),
	linksTemplate: _.template($('#links-template').html()),
	stacksTemplate: _.template($('#stack-template').html()),
	initialize: function() {
		var projectsCollection = new ProjectsCollection(projects);
		var portfolio  		 		 = new Portfolio({collection: projectsCollection});
		stackCollection 			 = new StackCollection(technologies);
		linksCollection 			 = new LinksCollection(links);
		this.setMain();
	},
	events: {},
	setMain: function() {
		this.renderAbout();
		this.renderTechnologies();
		this.setLinks();
	},
	renderAbout: function() {
		var bioCopy = new Copy(copy);
		var lead = bioCopy.get('lead');
		$('#bio').html(this.bioTemplate(bioCopy.toJSON()));
		$('.lead').append(lead);
	},
	renderTechnologies: function() {
		stackCollection.each(function(model) {
			$('#stack').append(this.stacksTemplate(model.toJSON()));
			return this;
		}.bind(this));
	},
	setLinks: function() {
		linksCollection.each(function(model) {
			this.renderContact(model);
		}.bind(this));
	},
	renderContact: function(model) {
		$('#contact').append(this.linksTemplate(model.toJSON()));
		return this;
	},
});
