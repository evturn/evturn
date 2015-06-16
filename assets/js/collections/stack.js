var Stack = Backbone.Collection.extend({
	model: Software,	
});

var node =
	{
		technology: 'Node.js',
		icon: 'devicon-nodejs-plain-wordmark',
		color: 'devicon-nodejs-plain-wordmark colored',
		id: 1
	};
var angular =				
	{
		technology: 'AngularJS',
		icon: 'devicon-angularjs-plain',
		color: 'devicon-angularjs-plain colored',
		id: 2
	};
var backbone =  		
	{
		technology: 'Backbone.js',
		icon: 'devicon-backbonejs-plain',
		color: 'devicon-backbonejs-plain colored',
		id: 3
	};
var jQuery = 				
	{
		technology: 'jQuery',
		icon: 'devicon-jquery-plain',
		color: 'devicon-jquery-plain colored',
		id: 4
	};
var bootstrap =  		
	{
		technology: 'Bootstrap',
		icon: 'devicon-bootstrap-plain',
		color: 'devicon-bootstrap-plain colored',
		id: 5
	};
var git =						
	{
	 	technology: 'git',
	 	icon: 'devicon-git-plain',
	 	color: 'devicon-git-plain colored',
	 	id: 6
	};
var photoshop =			
	{
		technology: 'Photoshop',
		icon: 'devicon-photoshop-plain',
		color: 'devicon-photoshop-plain colored',
		id: 7
 	};
var digitalOcean =	
	{
		technology: 'Droplet',
		icon: 'devicon-ubuntu-plain',
		color: 'devicon-ubuntu-plain colored',
		id: 8
	};
var firebase =      
	{
		technology: 'Firebase',
		icon: 'fa fa-database fa-2x',
		color: this.icon,
		id: 9
	};
var mongoDB =
	{
		technology: 'MongoDB',
		icon: 'devicon-mongodb-plain',
		color: 'devicon-mongodb-plain colored',
		id: 10
	};
var underscore =
	{
		technology: 'Underscore.js',
		icon: 'fa fa-minus fa-2x',
		color: this.icon,
		id: 11
	};
var express =
	{
		technology: 'Express.js',
		icon: 'devicon-nodejs-plain',
		color: 'devicon-nodejs-plain colored',
		id: 12	
	};
var mongodb =
	{
		technology: 'MongoDB',
		icon: 'devicon-mongdb-plain',
		color: 'devicon-nodejs-plain colored',
		id: 13	
	};
var sass =
	{
		technology: 'Sass',
		icon: 'devicon-sass-original',
		color: 'devicon-sass-original colored',
		id: 14
	};
var mongodb =
	{
		technology: 'MongoDB',
		icon: 'devicon-mongodb-plain',
		color: 'devicon-mongodb-plain colored',
		id: 15
	};
var gulp = 
	{
		technology: 'Gulp',
		icon: 'devicon-gulp-plain',
		color: 'devicon-gulp-plain',
		id: 16
	};

var myStack = new Stack([
	backbone,
	sass,
	node,
	bootstrap,
	git,
	gulp,
	photoshop,
	mongodb,
	digitalOcean,
	express
]);
