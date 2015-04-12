var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#technologies-template').html()),
});

var stacks = [
				{technology: 'Express.js'},
				{technology: 'Node.js'},
				{technology: 'AngularJS'},
				{technology: 'Backbone.js'},
			 	{technology: 'Heroku'},
			 	{technology: 'Digital Ocean'},
			 	{technology: 'MongoDB'},
			 	{technology: 'Firebase'}
];

var technologies = new Technologies(stacks)