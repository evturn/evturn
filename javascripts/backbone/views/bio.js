var BioView = Backbone.View.extend({
	el: $('#bio'),
	initialize: function() {
	template: _.bioTemplate($('#bio-template').html()),
		this.render()
	},
	render: function() {
		this.$el.html(this.template());
	}
});