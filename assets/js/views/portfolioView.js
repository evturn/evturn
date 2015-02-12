var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	ramenBuffetTemplate: _.template($('#ramen-template').html()),
	appButtonsTemplate: _.template($('#projects-template').html()),
	marshallzTemplate: _.template($('#marshallz-template').html()),
	alculatorTemplate: _.template($('#alculator-template').html()),
	hangmanTemplate: _.template($('#hangman-template').html()),
	tttTemplate: _.template($('#ttt-template').html()),
	initialize: function() {
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
		summary1 = new Summary(marshallzSummary);
		$projectEl.html(this.marshallzTemplate(summary1.toJSON()));
	},
	setAlculator: function() {
		summary2 = new Summary(alculatorSummary);
		$projectEl.html(this.alculatorTemplate(summary2.toJSON()));
	},
	setHangman: function() {
		summary3 = new Summary(hangmanSummary);
		$projectEl.html(this.hangmanTemplate(summary3.toJSON()));
	},
	setTTT: function() {
		summary4 = new Summary(tttSummary);
		$projectEl.html(this.tttTemplate(summary4.toJSON()));
	},
	setRamenBuffet: function() {
		summary5 = new Summary(ramenBuffetSummary);
		$projectEl.html(this.ramenBuffetTemplate(summary5.toJSON()));
	},
});