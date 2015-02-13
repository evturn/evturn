var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	ramenBuffetTemplate: _.template($('#ramen-template').html()),
	projectsNavTemplate: _.template($('#projects-nav-template').html()),
	projectTemplate: _.template($('#marshallz-template').html()),
	hangmanTemplate: _.template($('#hangman-template').html()),
	tttTemplate: _.template($('#ttt-template').html()),
	initialize: function() {
		this.renderProjectsNav();
		this.setProject1();
	},
	events: {
		'click #button-1': 'setProject1',
		'click #button-2': 'setProject2',
		'click #button-3': 'setHangman',
		'click #button-4': 'setTTT',
		'click #button-5': 'setRamenBuffet',
	},
	renderProjectsNav: function() {
		$('#projects-nav').html(this.projectsNavTemplate);
	},
	setProject1: function() {
		project1 = projectsCollection.models[0]
		$projectEl.html(this.projectTemplate(project1.toJSON()));
	},
	setProject2: function() {
		project2 = projectsCollection.models[1]
		$projectEl.html(this.projectTemplate(project2.toJSON()));
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