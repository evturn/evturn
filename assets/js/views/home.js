var Home = Backbone.View.extend({
	el: '.home',
	headerTemplate   			: _.template($('#home-template').html()),
	thumbsTemplate 			: _.template($('#thumbnails-template').html()),
	thumbsChildTemplate : _.template($('#thumbnail-child-template').html()),
	events: {
		'click .project-thumbnail' : 'work'
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.headerTemplate());
		this.$el.append(this.thumbsTemplate());
		this.thumbnails();
		return this;
	},
	thumbnails: function() {
		portfolio.each(function(app) {
			$('.thumbnail-items').append(this.thumbsChildTemplate(app.toJSON()));
		}.bind(this));
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