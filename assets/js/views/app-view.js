var AppView = Backbone.View.extend({
	el: '.wrapper',
	bioTemplate: _.template($('#bio-template').html()),
	contactTemplate: _.template($('#contact-template').html()),
	stacksTemplate: _.template($('#stack-template').html()),
	initialize: function() {
		var portfolio  = new Portfolio(projects);
		var portfolioView  = new PortfolioView({collection: portfolio});
		this.about();
		this.stack();
		this.contact();
	},
	about: function() {
		var about = new Copy(copy);
		var lead = about.get('lead');
		$('#bio').html(this.bioTemplate(about.toJSON()));
		$('.lead').append(lead);
	},
	stack: function() {
		var collection = new Technologies(technologies);
		collection.each(function(model) {
			$('#stack').append(this.stacksTemplate(model.toJSON()));
			return this;
		}.bind(this));
	},
	contact: function() {
		var collection = new Links(links);
		collection.each(function(model) {
			$('#contact').append(this.contactTemplate(model.toJSON()));
		}.bind(this));
	},
});
