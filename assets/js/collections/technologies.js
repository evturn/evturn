var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#stack-template').html()),
});

var stacks = [
	{
		image: 'assets/img/js-stack-white.png',
		technology: 
			[
			'Express.js',
			'Node.js',
			'AngularJS',
			'Backbone.js'
			]
	},
	{
		image: 'assets/img/gear-stack-white.png',
		technology: 
			[
			'Handlebars',
			'Underscore.js',
			'jQuery',
			'Bootstrap'
			]
	},
	{
		image: 'assets/img/grid-stack-white.png',
		technology: 
			[
			'Heroku',
			'Digital Ocean',
			'MongoDB',
			'Firebase'
			]
	},
	{
		image: 'assets/img/rails-stack-white.png',
		technology: 
			[
			'Sinatra',
			'Rails',
			'PostgreSQL', 
			'Git'
			]
	}
];

var technologies = new Technologies(stacks)