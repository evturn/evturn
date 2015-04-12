var Technologies = Backbone.Collection.extend({
	model: Stack,
	el: '#stack',
	template: _.template($('#technologies-template').html()),
});

var node =
	{
		technology: 'Node.js',
		icon: 'devicon-nodejs-plain',
		id: 1
	};
var angular =				
	{
		technology: 'AngularJS',
		icon: 'devicon-angularjs-plain',
		id: 2
	};
var backbone =  		{
											technology: 'Backbone.js',
											icon: 'devicon-backbonejs-plain',
											id: 3
										};
var jQuery = 				{
											technology: 'jQuery',
											icon: 'devicon-jquery-plain',
											id: 4
										};
var bootstrap =  		{
											technology: 'Bootstrap',
									 		icon: 'devicon-bootstrap-plain',
									 		id: 5
										};
var git =						{
										 	technology: 'git',
										 	icon: 'devicon-git-plain',
										 	id: 6
										};
var photoshop =			{
									 		technology: 'Photoshop',
									 		icon: 'devicon-photoshop-plain',
									 		id: 7
									 	};
var digitalOcean =	{
						 					technology: 'Digital Ocean',
						 					icon: 'devicon-ubuntu-plain',
						 					id: 8
						 				};
var firebase =      {
											technology: 'Firebase',
											icon: 'fa fa-database fa-2x',
											id: 9
										};
		 				

var stacks = [node, angular, backbone, jQuery, bootstrap, git, photoshop, digitalOcean];

var technologies = new Technologies(stacks)