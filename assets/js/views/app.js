var AppView = Backbone.View.extend({
	bioTemplate: _.template($('#bio-template').html()),
	linksTemplate: _.template($('#links-template').html()),
	stacksTemplate: _.template($('#stack-template').html()),
	initialize: function() {
		var projectsCollection  = new ProjectsCollection(projects);
		var portfolio 					= new Portfolio({collection: projectsCollection});
		this.render();
	},
	render: function() {
		this.renderAbout();
		this.renderTechnologies();
		this.renderContact();
	},
	renderAbout: function() {
		var about = new Copy(copy);
		var lead = about.get('lead');
		$('#bio').html(this.bioTemplate(about.toJSON()));
		$('.lead').append(lead);
	},
	renderTechnologies: function() {
		var collection = new StacksCollection(technologies);
		collection.each(function(model) {
			$('#stack').append(this.stacksTemplate(model.toJSON()));
			stackModel = model;
			this.addTechnologies(stackModel);
		}.bind(this));
	},
	addTechnologies: function(model) {
		var technologies = stackModel.get('technology');
		console.log('adding tech', technologies);
		for (var i = 0; i < technologies.length; i++) {
				var technology = technologies[i]
			$('.technology-box').append('<p>' + technology + '</p>');
			};
	},
	renderContact: function() {
		var collection = new LinksCollection(links);
		collection.each(function(model) {
			$('#contact').append(this.linksTemplate(model.toJSON()));
		}.bind(this));
	},
});
