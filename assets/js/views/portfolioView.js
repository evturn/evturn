var PortfolioView = Backbone.View.extend({
	appButtonsTemplate: _.template($('#projects-template').html()),
	initialize: function() {
		this.appButtonsView();
	},
	appButtonsView: function() {
		$('#projects').html(this.appButtonsTemplate);
	},
});