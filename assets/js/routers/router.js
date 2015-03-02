var Router = Backbone.Router.extend({
	routes: {
		'' : 'index'
	},
	initialize: function() {
		new AppView();
	},
	index: function() {
		$('#tooltip').tooltip()
	},
});