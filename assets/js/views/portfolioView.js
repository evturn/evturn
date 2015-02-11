var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	appButtonsTemplate: _.template($('#projects-template').html()),
	initialize: function() {
		this.renderAppButtons();
		new MarshallzView();
	},
	renderAppButtons: function() {
		$('#projects').html(this.appButtonsTemplate);
	},
	renderProjects: function() {

	},
});