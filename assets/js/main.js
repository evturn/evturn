new AppView();

projectsCollection = new ProjectsCollection(projects);
total = projectsCollection.length

$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});



