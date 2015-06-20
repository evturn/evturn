var ev = ev || {};

ev.Home = Backbone.View.extend({
	el: '.home',
	headerTemplate : _.template($('#home-template').html()),
	events: {
		'click .project-thumbnail' : 'work'
	},
	initialize: function() {
		this.header();
		this.thumbnails();
	},
	header: function() {
		this.$el.append(this.headerTemplate());
		return this;
	},
	thumbnails: function() {
		var view = new Thumbnails({collection: projects});
		this.$el.append(view.el);
	},
	work: function(e) {
		var id = $(e.currentTarget).data('id');
		var project = new Work({collection: projects});
		project.carousel(id);
		router.navigate('work', {trigger: false});
	},
});