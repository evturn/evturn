var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	appButtonsTemplate: _.template($('#projects-template').html()),
	marshallzTemplate: _.template($('#marshallz-template').html()),
	alculatorTemplate: _.template($('#alculator-template').html()),
	initialize: function() {
		this.renderAppButtons();
		new MarshallzView();
	},
	events: {
		'click .app-button': 'setAlculator'
	},
	renderAppButtons: function() {
		$('#projects').html(this.appButtonsTemplate);
	},
	setMarshallz: function() {

	},
	setAlculator: function() {
		$('#project-summary').html(this.alculatorTemplate);
	},
});