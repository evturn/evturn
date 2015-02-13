var Project = Backbone.Model.extend({
	defaults: {
		summary: '',
		stack: '',
		gallery: 
			[
			{
				url: 'assets/img/evturn-winter-white.jpg',
				active: 'dummy'
			}
			]
	},
});