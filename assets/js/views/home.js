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
	work: function(e) {
		var id = $(e.currentTarget).data('id');
		$('.home').hide();
		var project = new Work({collection: this.collection});
		project.carousel(id);
		$('.work').show();
		router.navigate('work', {trigger: false});
	},
});