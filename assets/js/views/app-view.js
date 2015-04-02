var AppView = Backbone.View.extend({
	el: '.wrapper',
	aboutTpl: _.template($('#about-template').html()),
	initialize: function() {
		var portfolioView  = new PortfolioView({collection: portfolio});
		this.about();
		this.section(technologies);
		this.section(contact);
	},
	about: function() {
		var lead = about.get('lead');
		$('#bio').html(this.aboutTpl(about.toJSON()));
		$('.lead').append(lead);
		return this;
	},
	section: function(collection) {
		collection.each(function(model) {
			$(collection.el).append(collection.template(model.toJSON()));
			return this;
		});
	},
});
