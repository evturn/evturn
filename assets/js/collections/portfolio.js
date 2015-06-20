var Portfolio = Backbone.Collection.extend({
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

var portfolio  = new Portfolio(featuredProjects);