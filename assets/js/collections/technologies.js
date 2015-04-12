var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#technologies-template').html()),
});

var stacks = [
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
 		technology: 'Bootstrap',
 		icon: 'devicon-bootstrap-plain'
	},
	{
	 	technology: 'git',
	 	icon: 'devicon-git-plain'
	},
 	{
 		technology: 'Photoshop',
 		icon: 'devicon-photoshop-plain'
 	},
 	 	{
 		technology: 'Digital Ocean',
 		icon: 'devicon-ubuntu-plain'
 	}
];

var technologies = new Technologies(stacks)