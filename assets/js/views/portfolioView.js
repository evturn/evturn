var PortfolioView = Backbone.View.extend({
	appButtonsTemplate: _.template($('#projects-template').html()),
	
	initialize: function() {
		this.renderAppButtons();
		new MarshallzView();
	},
	renderAppButtons: function() {
		$('#projects').html(this.appButtonsTemplate);
	},

});