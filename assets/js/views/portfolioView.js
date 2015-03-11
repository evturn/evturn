var PortfolioView = Backbone.View.extend({
	el: '#project',
	initialize: function() {
		this.addAll();
		this.setProject1();
	},
	events: {
		'click #button-1': 'setProject1',
		'click #button-2': 'setProject2',
		'click #button-3': 'setProject3',
		'click #button-4': 'setProject4',
		'click #button-5': 'setProject5',
    'click #button-6': 'setProject6'
	},
  addOne: function(model) {
    var view = new ProjectView({model: model});
    this.$el.html(view.el);
    this.activateCarousel();
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
  },
  setProject1: function() {
  	var project = this.collection.get(1);
  	this.addOne(project);
  },
  setProject2: function() {
  	var project = this.collection.get(2);
  	this.addOne(project);
  },
  setProject3: function() {
  	var project = this.collection.get(3);
  	this.addOne(project);
  },
  setProject4: function() {
  	var project = this.collection.get(4);
  	this.addOne(project);
  },
  setProject5: function() {
  	var project = this.collection.get(5);
  	this.addOne(project);
  },
  setProject6: function() {
    var project = this.collection.get(6);
    this.addOne(project);
  },
	activateCarousel: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
});