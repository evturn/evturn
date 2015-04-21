var Home = Backbone.View.extend({
	el: '.home',
	homeTemplate: _.template($('#home-template').html()),
	events: {
		'click .project-thumbnail' : 'work'
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.homeTemplate());
		return this;
	},
	work: function() {
		router.navigate('work', {trigger: true});
	},
});