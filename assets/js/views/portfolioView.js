var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	appButtonsTemplate: _.template($('#projects-template').html()),
	marshallzTemplate: _.template($('#marshallz-template').html()),
	alculatorTemplate: _.template($('#alculator-template').html()),
	hangmanTemplate: _.template($('#hangman-template').html()),
	tttTemplate: _.template($('#ttt-template').html()),
	ramenBuffetTemplate: _.template($('#ramen-template').html()),
	initialize: function() {
		$projectEl = $('#project-summary');
		this.renderAppButtons();
		this.setMarshallz();
	},
	events: {
		'click #button-1': 'setMarshallz',
		'click #button-2': 'setAlculator',
		'click #button-3': 'setHangman',
		'click #button-4': 'setTTT',
		'click #button-5': 'setRamenBuffet',
	},
	renderAppButtons: function() {
		$('#projects').html(this.appButtonsTemplate);
	},
	setMarshallz: function() {
		$projectEl.html(this.marshallzTemplate);
	},
	setAlculator: function() {
		$projectEl.html(this.alculatorTemplate);
	},
	setHangman: function() {
		$projectEl.html(this.hangmanTemplate);
	},
	setTTT: function() {
		$projectEl.html(this.tttTemplate);
	},
	setRamenBuffet: function() {
		$projectEl.html(this.ramenBuffetTemplate);
	},
});