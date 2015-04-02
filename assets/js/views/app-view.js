var AppView = Backbone.View.extend({
	el: '.wrapper',
	bioTemplate: _.template($('#bio-template').html()),
	contactTemplate: _.template($('#contact-template').html()),
	stacksTemplate: _.template($('#stack-template').html()),
	initialize: function() {
		var portfolioView  = new PortfolioView({collection: portfolio});
		this.about();
		this.stack();
		this.contact();
	},
	about: function() {
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
		contact.each(function(model) {
			$('#contact').append(this.contactTemplate(model.toJSON()));
		}.bind(this));
	},
});
