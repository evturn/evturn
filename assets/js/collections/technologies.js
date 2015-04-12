var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#technologies-template').html()),
});

var stacks = [
	{
		technology: 'JavaScript',
		icon: 'devicon-javascript-plain'
	},
	{
		technology: 'Express.js',
		icon: 'fa fa-diamond'
	},
	{
		technology: 'Node.js',
		icon: 'devicon-nodejs-plain'
	},
	{
		technology: 'AngularJS',
		icon: 'devicon-angularjs-plain'
	},
	{
		technology: 'Backbone.js',
		icon: 'devicon-backbonejs-plain'
	},
	{
		technology: 'jQuery',
		icon: 'devicon-jquery-plain'
	},
 	{
 		technology: 'Heroku',
 		icon: 'fa fa-diamond'
 	},
 	{
 		technology: 'Digital Ocean',
 		icon: 'devicon-ubuntu-plain'
 	},
 	{
 		technology: 'MongoDB',
 		icon: 'devicon-mongodb-plain'
 	},
 	{
 		technology: 'Bootstrap',
 		icon: 'devicon-bootstrap-plain'
	},
	{
	 	technology: 'git',
	 	icon: 'devicon-git-plain'
	},
 	{
 		technology: 'Firebase',
 		icon: 'fa fa-database'
 	},
 	{
 		technology: 'Photoshop',
 		icon: 'devicon-photoshop-plain'
 	},
 	{
 		technology: 'PostgreSQL',
 		icon: 'devicon-postgresql-plain'
 	},
 	{
 		technology: 'Rails',
 		icon: 'devicon-rails-plain'
 	},
 	{
 		technology: 'Ruby',
 		icon: 'devicon-ruby-plain'
 	}
];

var technologies = new Technologies(stacks)