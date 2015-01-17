var MaxwellsView = Backbone.View.extend({
	el: $('#project-img'),
	template: _.template($('#maxwells-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});