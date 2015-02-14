new AppView();

projectsCollection = new ProjectsCollection(projects);
total = projectsCollection.length

contactsCollection = new ContactsCollection(contacts);




$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});



