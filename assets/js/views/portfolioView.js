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
		model1 = new Project(marshallzModel);
		$projectEl.html(this.marshallzTemplate(model1.toJSON()));
	},
	setAlculator: function() {
		model2 = new Project(alculatorModel);
		$projectEl.html(this.alculatorTemplate(model2.toJSON()));
	},
	setHangman: function() {
		model3 = new Project(hangmanModel);
		$projectEl.html(this.hangmanTemplate(model3.toJSON()));
	},
	setTTT: function() {
		model4 = new Project(tttModel);
		$projectEl.html(this.tttTemplate(model4.toJSON()));
	},
	setRamenBuffet: function() {
		model5 = new Project(ramenBuffetModel);
		$projectEl.html(this.ramenBuffetTemplate(model5.toJSON()));
	},
});