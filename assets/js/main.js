new AppView();

projectsCollection = new ProjectsCollection(projects);

projectModels = projectsCollection.models;
imageObject = projectModels[0].get('image');
imageValues = _.values(imageObject[0]);
imageUrl = imageValues[0];
imageActive = imageValues[1];

$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});





