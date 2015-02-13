var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	projectTemplate: _.template($('#project-template').html()),
	projectsNavTemplate: _.template($('#projects-nav-template').html()),
	tttTemplate: _.template($('#ttt-template').html()),
	ramenBuffetTemplate: _.template($('#ramen-template').html()),
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
		model1 = projectsCollection.models[0];
		projectGallery = model1.get('gallery');
		$projectEl.html(this.projectTemplate(model1.toJSON()));
	},
	setProject2: function() {
		model2 = projectsCollection.models[1]
		projectGallery = model2.get('gallery');
		$projectEl.html(this.projectTemplate(model2.toJSON()));
	},
	setHangman: function() {
		model3 = projectsCollection.models[2]
		projectGallery = model3.get('gallery');
		$projectEl.html(this.projectTemplate(model3.toJSON()));
	},
	setTTT: function() {
		model4 = projectsCollection.models[3]
		projectGallery = model4.get('gallery');
		$projectEl.html(this.projectTemplate(model4.toJSON()));
	},
	setRamenBuffet: function() {
		model5 = projectsCollection.models[4]
		projectGallery = model5.get('gallery');
		$projectEl.html(this.projectTemplate(model5.toJSON()));
	},
});