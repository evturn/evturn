var TTT = Backbone.View.extend({
	el: $('#project-img'),
	template: _.template($('#ttt-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});