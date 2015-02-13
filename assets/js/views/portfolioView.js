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
		project1 = projectsCollection.models[0]
		$projectEl.html(this.marshallzTemplate(project1.toJSON()));
	},
	setAlculator: function() {
		project2 = projectsCollection.models[1]
		$projectEl.html(this.alculatorTemplate(project2.toJSON()));
	},
	setHangman: function() {
		project3 = projectsCollection.models[2]
		$projectEl.html(this.hangmanTemplate(project3.toJSON()));
	},
	setTTT: function() {
		project4 = projectsCollection.models[3]
		$projectEl.html(this.tttTemplate(project4.toJSON()));
	},
	setRamenBuffet: function() {
		project5 = projectsCollection.models[4]
		$projectEl.html(this.ramenBuffetTemplate(project5.toJSON()));
	},
});