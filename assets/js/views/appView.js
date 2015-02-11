var AppView = Backbone.View.extend({
	el: '#wrapper',
	bioTemplate: _.template($('#bio-template').html()),
	stackTemplate: _.template($('#stack-template').html()),
	avatarTemplate: _.template($('#avatar-template').html()),
	contactTemplate: _.template($('#contact-template').html()),
	initialize: function() {
		this.setAll();
		new Portfolio();
		new MarshallzView();
	},
	setAll: function() {
		$('#bio').html(this.bioTemplate);
		$('#stack').html(this.stackTemplate);
		$('#avatar').html(this.avatarTemplate);
		$('#contact').html(this.contactTemplate);
	},
});