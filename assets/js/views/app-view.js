var AppView = Backbone.View.extend({
	aboutTpl: _.template($('#about-template').html()),
	initialize: function() {
		var portfolioView  = new PortfolioView({collection: portfolio});
		this.about();
		this.section(technologies);
		this.section(contact);
	},
	about: function() {
		$('.about-paragraphs').html(this.aboutTpl(about.toJSON()));
		return this;
	},
	section: function(collection) {
		collection.each(function(model) {
			$(collection.el).append(collection.template(model.toJSON()));
			return this;
		});
	},
});
