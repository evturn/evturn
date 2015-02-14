new AppView();

projectsCollection = new ProjectsCollection(projects);
portfolioView  = new PortfolioView();

techCollection = new TechCollection(technologies);

$('#portfolio').hide();

$('.carousel').carousel({
	interval: 2000
});



