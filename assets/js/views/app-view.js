var AppView = Backbone.View.extend({
	el: '.wrapper',
	aboutTpl: _.template($('#bio-template').html()),
	contactTpl: _.template($('#contact-template').html()),
	stacksTpl: _.template($('#stack-template').html()),
	initialize: function() {
		var portfolioView  = new PortfolioView({collection: portfolio});
		this.about();
		this.stack();
		this.contact();
	},
	about: function() {
		var lead = about.get('lead');
		$('#bio').html(this.aboutTpl(about.toJSON()));
		$('.lead').append(lead);
	},
	stack: function() {
		technologies.each(function(model) {
			$('#stack').append(this.stacksTpl(model.toJSON()));
			return this;
		}.bind(this));
	},
	contact: function() {
		contact.each(function(model) {
			$('#contact').append(this.contactTpl(model.toJSON()));
		}.bind(this));
	},
});
