var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#technologies-template').html()),
});

var stacks = [
	{
		image: 'assets/img/js-stack-white.png',
		technologies: 
			[
				{technology: 'Express.js'},
				{technology: 'Node.js'},
				{technology: 'AngularJS'},
				{technology: 'Backbone.js'}
			]
	},
	{
		image: 'assets/img/gear-stack-white.png',
		technologies: 
			[
				{technology: 'Handlebars'},
				{technology: 'Underscore.js'},
				{technology: 'jQuery'},
				{technology: 'Bootstrap'}
			]
	},
	{
		image: 'assets/img/grid-stack-white.png',
		technologies: 
			[
			 {technology: 'Heroku'},
			 {technology: 'Digital Ocean'},
			 {technology: 'MongoDB'},
			 {technology: 'Firebase'}
			]
	},
	{
		image: 'assets/img/rails-stack-white.png',
		technologies: 
			[
			 {technology: 'Sinatra'},
			 {technology: 'Rails'},
			 {technology: 'PostgreSQL'}, 
			 {technology: 'Git'}
			]
	}
];

var technologies = new Technologies(stacks)