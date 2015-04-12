var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#technologies-template').html()),
});

var stacks = [
	{
		technology: 'Node.js',
		icon: 'devicon-nodejs-plain',
		id: 1
	},
	{
		technology: 'AngularJS',
		icon: 'devicon-angularjs-plain',
		id: 2
	},
	{
		technology: 'Backbone.js',
		icon: 'devicon-backbonejs-plain',
		id: 3
	},
	{
		technology: 'jQuery',
		icon: 'devicon-jquery-plain',
		id: 4
	},
 	{
 		technology: 'Bootstrap',
 		icon: 'devicon-bootstrap-plain',
 		id: 5
	},
	{
	 	technology: 'git',
	 	icon: 'devicon-git-plain',
	 	id: 6
	},
 	{
 		technology: 'Photoshop',
 		icon: 'devicon-photoshop-plain',
 		id: 7
 	},
 	 	{
 		technology: 'Digital Ocean',
 		icon: 'devicon-ubuntu-plain',
 		id: 8
 	}
];

var technologies = new Technologies(stacks)