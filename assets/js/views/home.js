var Home = Backbone.View.extend({
	el: '.home',
	headerTemplate   		: _.template($('#home-template').html()),
	events: {
		'click .project-thumbnail' : 'work'
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.headerTemplate());
		return this;
	},
	thumbnails: function() {
		$('.projects').html(this.thumbsTemplate());
		projects.each(function(app) {
			$('.thumbnail-items').append(this.thumbsChildTemplate(app.toJSON()));
		}.bind(this));
		this.$el.append($('.projects'));
	},
	work: function(e) {
		var id = $(e.currentTarget).data('id');
		var project = new Work({collection: this.collection});
		project.carousel(id);
		router.navigate('work', {trigger: false});
	},
});