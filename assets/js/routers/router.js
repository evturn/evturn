var Router = Backbone.Router.extend({
	routes: {
		'portfolio:' : 'showPortfolio'
	},
	showPortfolio: function() {
		console.log('I am here to show you the portfolio');
	},
});