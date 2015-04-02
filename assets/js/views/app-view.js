var AppView = Backbone.View.extend({
	el: '.wrapper',
	aboutTpl: _.template($('#bio-template').html()),
	initialize: function() {
		var portfolioView  = new PortfolioView({collection: portfolio});
		this.about();
		this.sections(technologies);
		this.sections(contact);
	},
	about: function() {
		var lead = about.get('lead');
		$('#bio').html(this.aboutTpl(about.toJSON()));
		$('.lead').append(lead);
	},
	sections: function(collection) {
		collection.each(function(model) {
			$(collection.el).append(collection.template(model.toJSON()));
			return this;
		}.bind(this));
	},
});
