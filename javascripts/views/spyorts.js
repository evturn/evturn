var SpyortsView = Backbone.View.extend({
	el: $('#project-img'),
	template: _.template($('#spyorts-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('SpYortsView');