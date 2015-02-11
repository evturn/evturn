var LandingView = Backbone.View.extend({
	el: '#wrapper',
	bioTemplate: _.template($('#bio-template').html()),
	stackTemplate: _.template($('#stack-template').html()),
	avatarTemplate: _.template($('#avatar-template').html()),
	contactTemplate: _.template($('#contact-template').html()),
	initialize: function() {
		this.bioView();
		this.stackView();
		this.avatarView();
		this.contactView();
		new Portfolio();
		new MarshallzView();
	},
	bioView: function() {
		$('#bio').html(this.bioTemplate);
	},
	stackView: function() {
		$('#stack').html(this.stackTemplate);
	},
	avatarView: function() {
		$('#avatar').html(this.avatarTemplate);
	},
	contactView: function() {
		$('#contact').html(this.contactTemplate);
	},
});