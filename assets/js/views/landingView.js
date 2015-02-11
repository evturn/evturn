var LandingView = Backbone.View.extend({
	el: '#wrapper',
	bioTemplate: _.template($('#bio-template').html()),
	initialize: function() {
		this.bioView();
		new Stack();
		new Avatar();
		new Contact();
		new Portfolio();
		new MarshallzView();
	},
	bioView: function() {
		$('#bio').html(this.bioTemplate);
	},
});