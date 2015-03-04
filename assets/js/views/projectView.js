var ProjectView = Backbone.View.extend({
	projectTemplate: _.template($('#project-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #collapse-list': 'togglePortfolio'
	},
	render: function() {
		this.$el.append(this.projectTemplate(this.model.toJSON()));
		return this;
	},
	togglePortfolio: function(e) {
		e.preventDefault();
		$('#portfolio').slideToggle('slow');
	},
});