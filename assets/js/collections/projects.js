var Projects = Backbone.Collection.extend({
	model: Project,
});



var featuredProjects = [
	musicInsider, 
	marshallz, 
	piqueBeta,
	drive, 
	alculator, 
	ramenBuffet, 
	hangman, 
	tictactoe
];

var projects  = new Projects(featuredProjects);