var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
	projectTemplate: _.template($('#project-template').html()),
	projectsNavTemplate: _.template($('#projects-nav-template').html()),
	initialize: function() {
		projectsCollection = new ProjectsCollection(projects);
		$projectEl = $('#project-summary');
		total = projectsCollection.length
		buttons = [];
		this.renderProjectsNav();
		this.setProject5();
		this.setProject4();
		this.setProject3();
		this.setProject2();
		this.setProject1();
	},
	events: {
		'click #button-1': 'setProject1',
		'click #button-2': 'setProject2',
		'click #button-3': 'setProject3',
		'click #button-4': 'setProject4',
		'click #button-5': 'setProject5',
	},
	renderProjectsNav: function() {
		this.createId('button');
		buttonsCollection = new ButtonsCollection(buttons);
		$('#projects-nav').html(this.projectsNavTemplate);
	},
	setProject1: function() {
		model1 = projectsCollection.models[0];
		projectGallery = model1.get('gallery');
		$projectEl.html(this.projectTemplate(model1.toJSON()));
		this.activateCarousel();
	},
	setProject2: function() {
		model2 = projectsCollection.models[1]
		projectGallery = model2.get('gallery');
		$projectEl.html(this.projectTemplate(model2.toJSON()));
		this.activateCarousel();
	},
	setProject3: function() {
		model3 = projectsCollection.models[2]
		projectGallery = model3.get('gallery');
		$projectEl.html(this.projectTemplate(model3.toJSON()));
		this.activateCarousel();
	},
	setProject4: function() {
		model4 = projectsCollection.models[3]
		projectGallery = model4.get('gallery');
		$projectEl.html(this.projectTemplate(model4.toJSON()));
		this.activateCarousel();
	},
	setProject5: function() {
		model5 = projectsCollection.models[4]
		projectGallery = model5.get('gallery');
		$projectEl.html(this.projectTemplate(model5.toJSON()));
		this.activateCarousel();
	},
	createId: function(string) {
	  counter = 1;
	  for (counter + 1; counter <= total; counter++) {
	    var projectButton = new ProjectButton;
	    buttonId = string + '-' + counter;
	    projectNumber = counter;
	    projectButton.set({number: projectNumber, id: buttonId});
	    buttons.push(projectButton);
	  };
	},
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 2000
		});
	},
});