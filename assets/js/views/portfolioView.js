var PortfolioView = Backbone.View.extend({
	el: '#project',
	initialize: function() {
		$projectEl = $('#project');
		total = projectsCollection.length
		this.addAll();
	},
	// events: {
	// 	'click #button-1': 'setProject1',
	// 	'click #button-2': 'setProject2',
	// 	'click #button-3': 'setProject3',
	// 	'click #button-4': 'setProject4',
	// 	'click #button-5': 'setProject5',
	// },
  addOne: function(model) {
    var view = new ProjectView({model: model});
    this.$el.append(view.el);
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
  },
	// setProject1: function() {
	// 	model1 = projectsCollection.models[0];
	// 	projectGallery = model1.get('gallery');
	// 	$projectEl.html(this.projectTemplate(model1.toJSON()));
	// 	this.activateCarousel();
	// },

	// createId: function(string) {
	//   counter = 1;
	//   for (counter + 1; counter <= total; counter++) {
	//     var projectButton = new ProjectButton;
	//     buttonId = string + '-' + counter;
	//     projectNumber = counter;
	//     projectButton.set({number: projectNumber, id: buttonId});
	//     buttons.push(projectButton);
	//   };
	// },
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 2000
		});
	},
});