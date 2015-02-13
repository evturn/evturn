new AppView();

projectsCollection = new ProjectsCollection(projects);

projectImages = projectsCollection.models[0].get('image');


$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});




