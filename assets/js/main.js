new AppView();

projectsCollection = new ProjectsCollection(projects);

tester = projectsCollection.models[0];

testerGallery = tester.get('gallery');

$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});





